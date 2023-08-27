import Image from "next/image";
import me from "../public/dwight-watson.jpg";

export default function Bio() {
  return (
    <div className="border border-gray-300 rounded-md mb-8">
      <div className="flex justify-between items-center gap-5 p-4">
        <p>
          A blog about Laravel & Rails by Dwight Watson;
          <br />
          <span className="text-sm">
            developer of{" "}
            <a
              href="https://www.roomies.com"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Roomies.com
            </a>
            ,{" "}
            <a
              href="https://www.myrent.co.nz"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              myRent.co.nz
            </a>
            ,{" "}
            <a
              href="https://highschoolnotes.com.au"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              High School Notes
            </a>{" "}
            &amp;{" "}
            <a
              href="https://studentvip.com.au"
              className="text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              StudentVIP.com.au
            </a>
            .
          </span>
        </p>
        <Image
          src={me}
          alt="Picture of Dwight Watson"
          className="inline-block rounded-full overflow-hidden w-20"
        />
      </div>

      <div className="border-t border-gray-100 text-xs p-4">
        <p>
          Follow me on{" "}
          <a
            href={`https://twitter.com/DwightConrad`}
            className="text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          , or{" "}
          <a
            href={`https://github.com/dwightwatson`}
            className="text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
