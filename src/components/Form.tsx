const Form = (
    { setItem }: {
        setItem: React.Dispatch<React.SetStateAction<string[]>>
    }) => {
    const addIngredient = (formData: FormData) => {
        const ingredient = formData.get("ingredient") as string;
        setItem((prevItem) => [...prevItem, ingredient]);
    };
    return (
        <form
            action={addIngredient}
            className="flex justify-center items-center gap-[12px] h-[38px]"
        >
            <input
                type="text"
                placeholder="Add ingredient"
                aria-label="Add ingredient"
                name="ingredient"
                className="rounded-[6px] border-[1px] border-[#D1D5DB] px-[9px] py-[6px] min-w-[150px] max-w-[400px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex-grow"
            />
            <button
                className="font-[sans-serif] text-[0.875rem] w-[150px] font-medium rounded-[6px] bg-[#141413] text-[#FAFAF8] px-[20px] py-[10px] before:content-['+'] before:mr-2"
            >
                Add ingredient
            </button>
        </form>
    );
}

export default Form;