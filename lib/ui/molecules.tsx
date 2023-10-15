import { Text } from "@/lib/ui"

export const Brand: React.FC = () => (
    <div className="flex flex-row items-center">
        <span className="text-blue-950 text-4xl font-black mr-1">
            <svg className="h-8 w-8" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_19_68)">
                    <rect width="100%" height="400" fill="100%" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H400V400H0V0ZM40 40H360V360H40V40ZM80 80H320V320H80V80ZM200 120H280V200H200V120Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_19_68">
                        <rect width="100%" height="100%" />
                    </clipPath>
                </defs>
            </svg>
        </span>
        <span className="text-blue-950 text-md font-black uppercase leading-none">Netra<br />Construction</span>
    </div>
)

export const SectionHeading: React.FC<any> = ({ title, action, ...rest }) => (
    <div {...rest} className="scroll-mt-20 border-t py-16 px-4 md:px-16 flex flex-row items-center justify-between">
        <Text as="h2" className="border-l-4 pl-4 text-2xl text-blue-950 font-bold">
            {title}
        </Text>
        <Text className="text-2xl text-blue-300 font-semibold">
            {action}
        </Text>
    </div>
)