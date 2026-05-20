import { ImageWithFallback } from "./utils/ImageWithFallback";

export const Footer = () => {
    return (
              <footer className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <a href="https://www.blackownedbwk.com/" target="_blank" rel="noopener noreferrer" className="relative bottom-4">
                <ImageWithFallback style={{ height: '100px', width: '100px'}} src="https://images.squarespace-cdn.com/content/v1/66a29e697b928f1f6b7e62c0/ace65cbb-1d78-4511-8c2d-3ac60c170e72/Untitled+design+%287%29.png?format=1500w" />
                </a>
                <span>
                powered by <a href="https://www.openlaunchworks.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenLaunchWorks</a>
                </span>
                <a href="https://www.openlaunchworks.com/accessibility" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Accessibility Statement</a>
             </footer>
    );
}