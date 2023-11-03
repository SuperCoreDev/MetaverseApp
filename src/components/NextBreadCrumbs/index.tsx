import { useRouter } from "next/router";
import NextLink from 'next/link'
import { useMemo , useEffect , useState} from "react";
import { Breadcrumbs , Typography , Link} from "@mui/material";

const _defaultGetTextGenerator = (param : string, query : string) => null;
const _defaultGetDefaultTextGenerator = (path : string) => path;

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = (pathStr:string) => {
  const pathWithoutQuery = pathStr.split("?")[0];
  return pathWithoutQuery.split("/")
                         .filter(v => v.length > 0);
}
type CrumbProps = {
    text : string;
    textGenerator : Function;
    href : string,
    last : Boolean
}
function Crumb({ text: defaultText, textGenerator, href, last=false } : CrumbProps) {

    const [text, setText] = useState(defaultText);
  
    useEffect(() => {
      // If `textGenerator` is nonexistent, then don't do anything
      if (!textGenerator || typeof textGenerator !== 'function') { return; }
      // Run the text generator and set the text again
      const finalText = textGenerator();
      setText(finalText);
    }, [textGenerator]);
  
    if (last) {
      return <Typography color="white">{text}</Typography>
    }
  
    return (
      <Link component={NextLink} underline="hover" color="white" href={href}>
        {text}
      </Link>
    );
  }

type NextBreadcrumbsProps = {
    getTextGenerator : Function,
    getDefaultTextGenerator : Function
}
export default function NextBreadcrumbs({
  getTextGenerator=_defaultGetTextGenerator,
  getDefaultTextGenerator=_defaultGetDefaultTextGenerator
} : NextBreadcrumbsProps) {
  const router = useRouter();

  const breadcrumbs = useMemo(() => {
    const asPathNestedRoutes = generatePathParts(router.asPath);
    const pathnameNestedRoutes = generatePathParts(router.pathname);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // Pull out and convert "[post_id]" into "post_id"
      const param = pathnameNestedRoutes[idx].replace("[", "").replace("]", "");

      const href = `/${asPathNestedRoutes.slice(0, idx + 1).join("/")}`;
      return {
        href, textGenerator: getTextGenerator(param, router.query),
        text: getDefaultTextGenerator(subpath, href)
      }; 
    })
    return crumblist

    // return [{ href: "/metaverse/buildestate", text: "Build Estate" , textGenerator : null}, ...crumblist];
  }, [router.asPath, router.pathname, router.query, getTextGenerator, getDefaultTextGenerator]);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((crumb, idx) => (
        idx!==0 && <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
}


