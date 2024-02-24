'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/utils/cn';
export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string[];
	className?: string;
}) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			'span',
			{
				opacity: 1,
			},
			{
				duration: words.length,
				delay: stagger(0.2),
			}
		);
	}, [animate]);
	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{words.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className='dark:text-white text-black opacity-0'
						>
							{word}{' '}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn('font-regular', className)}>
			<div className='mt-4'>
				<div className=' dark:text-white text-black leading-snug tracking-wide'>
					<>{renderWords() as unknown as string}</>
				</div>
			</div>
		</div>
	);
};
