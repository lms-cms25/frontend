import GeneralLayout from "@/components/layouts/GeneralLayout";


const layout = ({ children }: Readonly<{children: React.ReactNode;}>) => {
    return <GeneralLayout>{children}</GeneralLayout>
}

export default layout;