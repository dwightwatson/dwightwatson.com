import Image from "next/image";
import me from "../public/dwight-watson.jpg";

export default function Bio() {
  return (
    <div className="border border-gray-300 rounded-md mb-8">
      <div className="flex justify-between items-center gap-5 p-4">
        <div>
          <p>A blog about Laravel & Rails by Dwight Watson;</p>
          <ul className="list-disc text-sm pl-4">
            <li className="text-gray-700">
              developer of{" "}
              <a
                href="https://www.roomies.com"
                className="text-gray-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roomies
              </a> &amp;{" "}
              <a
                href="https://highschoolnotes.com.au"
                className="text-gray-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                High School Notes
              </a>
              .
            </li>
            <li className="text-sm text-gray-500">
              previously{" "}
              <a
                href="https://www.myrent.co.nz"
                className="text-gray-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                myRent
              </a>{" "}
              &amp;{" "}
              <a
                href="https://www.flatmates.com.au"
                className="text-gray-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flatmates
              </a>
              .
            </li>
          </ul>
        </div>
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
