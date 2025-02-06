const List = (
    { items }: {
        items: string[];
    }
) => {
    return (
        <ul className="mb-[48px] px-[26px] pt-[20px] ">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="text-[#475467] leading-[28px] list-disc list-inside"
                >
                    {item}</li>
            ))}
        </ul>
    )
}

export default List;