import List from "./List";
const IngredientsList = (
    {
        ingredients,
        getRecipe
    }: {
        ingredients: string[]
        getRecipe: () => void
    }
) => {
    return (
        <section>
            <h2 className="text-[1.250rem] font-bold leading-[24px] mt-[23px]"
            >Ingredients on hand:</h2>
            <List
                items={ingredients}
            />
            {ingredients.length > 3 && <div className="flex justify-between items-center rounded-[8px] bg-[#F0EFEB] px-[10px] py-[28px]">
                <div>
                    <h3 className="text-[1.125rem] font-medium leading-[24px]">Ready for a recipe?</h3>
                    <p className="text-[#6B7280] text-[0.875rem] leading-[20px]">Generate a recipe from your list of ingredients.</p>
                </div>
                <button
                    onClick={getRecipe}
                    className="border-none rounded-[6px] bg-[#D17557] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-[#FAFAF8] px-[17px] py-[9px] font-inter text-[0.875rem] cursor-pointer"
                >
                    Get a recipe</button>
            </div>}
        </section>
    )
}

export default IngredientsList;