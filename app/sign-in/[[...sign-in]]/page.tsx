"use client"
import { useTheme } from "@/components/context/ThemeContext";
import { ClerkLoading, SignIn } from "@clerk/nextjs";




const customLabels = {

    signIn: {
        title: 'Sign In',
        subtitle: 'Welcome back! Please sign in to your account.',
        footerActionText: '',
        // Add other custom labels if needed
    },
};


export default function Page() {
    const { theme } = useTheme()

    const customAppearance = {
        variables: {
            colorPrimary: '#FF6F00', // Tomato color
            colorText: theme === 'light' ? '#333333' : "#888888", // Dark text
            colorBackground: theme === 'light' ? '#E8E9E9' : "#131619", // Light background
            fontFamily: 'Arial, sans-serif',
            borderRadius: '8px',
            colorBorder: '#ff6347',
            colorInputBackground: theme === "light" ? "#ffffff" : "#333333"
        },
        elements: {
            footerActionLink: {
                display: 'none', // Hide the "Sign up" link
            },

            footerActionText: {
                color: theme === "light" ? '#E8E9E9' : "#131619", // Change this to your desired color
            },
        },


    };







    return (
        <div className={`min-h-screen flex items-center justify-center ${theme === 'light' ? "bg-light-200 " : "bg-gray-800"}`
        } >
            <ClerkLoading>
                <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
            </ClerkLoading>
            {/* @ts-ignore */}
            <SignIn appearance={customAppearance} localization={customLabels} />
        </div>
    );
}