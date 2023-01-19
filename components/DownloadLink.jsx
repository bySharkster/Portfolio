export const DownloadLink = ({ href, fileName }) => {
    return (
            <a href={href} download={fileName} className="btn btn-warning btn-outline hover:scale-95 hover:shadow-xl hover:font-bold hover:text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">
        Download
    </a>

    );
};