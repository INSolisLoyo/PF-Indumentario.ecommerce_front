export const getColors = (color) => {

    const newColor = color.includes(' ') ? color.replace(' ', '') : color;

    const colors = {
        Black: 'bg-slate-950',
        Blue: 'bg-blue-600',
        White: 'bg-zinc-50',
        GreenBlue: 'bg-teal-600',
        Brown: 'bg-amber-900',
        Green: 'bg-lime-700',
        Red: 'bg-red-500',
        Gray: 'bg-gray-400',
        LightBlue: 'bg-blue-300',
        Purple: 'bg-purple-400'
    }

    return [colors[newColor], color];
}