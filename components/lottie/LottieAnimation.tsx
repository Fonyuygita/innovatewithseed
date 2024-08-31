import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
    animationData: object;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animation: AnimationItem | undefined;
        if (container.current) {
            animation = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid meet', // Adjust this value as needed
                },
            });
        }
        return () => {
            animation?.destroy();
        };
    }, [animationData]);

    return <div ref={container} className="w-[400px] h-[340px]" />;
};

export default LottieAnimation;
