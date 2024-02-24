'use client';

import { useChat } from 'ai/react';
import { TextGenerateEffect } from '@/components/TextGenerate';

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
		useChat();

	return (
		<div className='h-dvh w-full flex flex-col justify-center max-w-7xl m-auto relative px-2'>
			<h1 className='font-bold text-2xl mx-auto mt-2'>
				Ai.Den - Your Mental Health Assistant
			</h1>
			<div className='border-4 rounded-md border-gray-200/80 shadow-sm w-full h-full flex flex-col my-4 px-2'>
				<div className='px-2 h-full flex flex-col overflow-auto scroll-smooth'>
					{messages.map((m, i) => (
						<div
							key={m.id}
							className={` mb-4 bg-[#0C0C0C] rounded-md text-gray-100 p-2 ${
								m.role === 'user' ? 'self-end w-72 ' : ' lg:w-[32rem]'
							} ${i === 0 ? 'mt-4' : 'mt-2'}`}
						>
							<p className={`font-bold text-md`}>
								{m.role === 'user' ? 'User: ' : 'Aiden: '}
							</p>
							{m.role === 'user' ? (
								<p>{m.content}</p>
							) : (
								<TextGenerateEffect
									className='px-2 h-fit'
									words={m.content.split(' ') as string[]}
								/>
							)}
							{/* <Markdown remarkPlugins={[remarkGfm]}>{m.content.split(' ') as string}</Markdown> */}
						</div>
					))}
				</div>
				<div>
					<form
						onSubmit={handleSubmit}
						className='border-4 rounded-md bg-white border-gray-400/80 px-4  h-20 items-center max-w-5xl w-full m-auto flex justify-evenly  bottom-4 right-0 left-0 mb-2'
					>
						<input
							value={input}
							placeholder='Say something...'
							onChange={handleInputChange}
							className={
								'w-full h-full outline-none py text-lg placeholder:text-lg px-2'
							}
						/>
						<div>
							{isLoading && (
								<button
									onClick={stop}
									className='bg-[#0C0C0C] text-gray-100 font-medium p-4 px-4 rounded w-28 h-18'
								>
									Stop
								</button>
							)}
							<button
								disabled={isLoading}
								className={`bg-[#0C0C0C] text-gray-100 font-medium p-4 rounded w-28 h-18 ${
									isLoading && 'hidden'
								}`}
							>
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
