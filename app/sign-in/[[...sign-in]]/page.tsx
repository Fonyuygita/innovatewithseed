import { ClerkLoading, SignIn } from "@clerk/nextjs";

const customAppearance = {
    variables: {
        colorPrimary: '#ff6347', // Tomato color
        colorText: '#333', // Dark text
        colorBackground: '#E8E9E9', // Light background
        fontFamily: 'Arial, sans-serif',
        borderRadius: '8px',
        colorBorder: '#ff6347',
        colorInputBackground: "#ffffff"
    },
    elements: {
        footerActionLink: {
            display: 'none', // Hide the "Sign up" link
        },

        footerActionText: {
            color: '#E8E9E9', // Change this to your desired color
        },
    },


};



const customLabels = {
    signIn: {
        title: 'Sign In',
        subtitle: 'Welcome back! Please sign in to your account.',
        footerActionText: '',
        // Add other custom labels if needed
    },
};


export default function Page() {








    return (
        <div className="min-h-screen flex items-center justify-center ">
            <ClerkLoading>
                <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
            </ClerkLoading>
            {/* @ts-ignore */}
            <SignIn appearance={customAppearance} localization={customLabels} />
        </div>
    );
}