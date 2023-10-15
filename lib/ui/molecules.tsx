import { Text } from "@/lib/ui"

export const Brand: React.FC = () => (
    <div className="flex flex-row items-center">
        <span className="text-blue-950 text-4xl font-black mr-2">N</span>
        <span className="text-blue-950 text-md font-bold uppercase leading-none">Netra<br />Construction</span>
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