export const getColors = (color) => {

    const colors = {
        Black: 'bg-slate-950',
        Blue: 'bg-blue-600',
        White: 'bg-zinc-50',
        Brown: 'bg-amber-900',
        Green: 'bg-lime-700',
        Red: 'bg-red-500',
        Gray: 'bg-gray-400',
        Purple: 'bg-purple-400',
	    Orange: 'bg-orange-400',
	    Yellow: 'bg-yellow-400',
	    Pink: 'bg-pink-400',
	    Beige: 'bg-orange-100'
    }

    return colors[color];
}