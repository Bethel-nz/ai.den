'use client';

import { useChat } from 'ai/react';
import { TextGenerateEffect } from '@/components/TextGenerate';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import { CircleStop, Send } from 'lucide-react';

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
		useChat();

	return (
		<div className='h-dvh w-full flex flex-col justify-center max-w-7xl m-auto relative px-2'>
			<div className='mx-auto  mt-2 text-center'>
				<h1 className='font-bold text-xl'>
					Ai.Den - Your Mental Health Assistant
				</h1>
			</div>
			<div className='border-2 rounded-md border-gray-200/80 shadow-sm w-full h-full flex flex-col my-2 px-2'>
				<div className='px-2 h-full flex flex-col overflow-auto scroll-smooth'>
					{messages.map((m, i) => (
						<div
							key={m.id}
							className={` mb-4 bg-[#0C0C0C] rounded-md text-gray-100 p-2 ${
								m.role === 'user' ? 'self-end pl-2 w-[24] lg:w-72' : ' '
							} ${i === 0 ? 'mt-4' : 'mt-2'}`}
						>
							<p className={`font-bold text-md`}>
								{m.role === 'user' ? 'User: ' : 'Aiden: '}
							</p>

							<Markdown remarkPlugins={[remarkGfm]}>
								{m.content as string}
							</Markdown>
						</div>
					))}
				</div>
				<div>
					<form
						onSubmit={handleSubmit}
						className='border-2 rounded-md bg-white border-gray-400/80 px-2  h-16 lg:h-20 items-center max-w-5xl w-full m-auto flex justify-evenly  bottom-4 right-0 left-0 mb-2'
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
									className='bg-[#0C0C0C] text-gray-100 font-medium rounded p-2 '
								>
									<CircleStop className='text-sm size-8' />
								</button>
							)}
							<button
								disabled={isLoading}
								className={`bg-[#0C0C0C] text-gray-100 font-medium p-2 rounded ${
									isLoading && 'hidden'
								}`}
							>
								<Send className='text-sm lg:size-8' />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
