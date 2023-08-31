    import React from 'react'

        const Card = ({emoji,title,emojiDescription,colorClass,hoverColorClass}) => {
            return (
            <div className={`border rounded-lg shadow-md p-4 mx-4 my-6 w-[370px] h-[230px] ${colorClass} hover:${hoverColorClass} hover:-rotate-3 transition duration-300 ease-in-out`}>
                <div className="text-2xl mb-6">{emoji}</div>
                <h2 className="text-lg font-semibold mb-6">{title}</h2>
                <p className="text-gray-600">
                    {emojiDescription}
                </p>
            </div>
            );
        };
    export default Card
