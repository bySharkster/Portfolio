import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
import Link from "next/link";

export const DownloadLink = ({ href, fileName }) => {
    
    return (
            <Link type="button" href={href} download={fileName} target="_blank" className="btn-ast sm:btn-ast-sm md:btn-ast-md lg:btn-ast-lg">
            <span className="buttonDownload">Download</span> 
            </Link>

    );
}


