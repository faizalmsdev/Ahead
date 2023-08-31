

    const TextRep = ({title,para,para2}) => {
    return (
        <section className="section-m flex flex-1 gap-[120px] items-start pr-[42px]">
            <h2 className="font-bold text-3xl w-[320px] ml-[12px]">{title}</h2>
            <p className=" w-[340px] text-xl  text-gray-500">
                {para}
            </p>
            <p className="text-gray-500 w-[320px] text-xl ml-10 ">
                {para2}
            </p>
        </section>
    )
    }

    export default TextRep
