import { useState } from "react";
import Form from "./Form";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
// import { getRecipeFromMistral } from "../ai";

const Main = () => {

    const [ingredients, setIngredients] = useState<string[]>(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    );
    const [recipeShown, setRecipeShown] = useState<boolean>(false)

    const getRecipe = async () => {
        // const recipeMark = await getRecipeFromMistral(ingredients)
        // console.log(recipeMark)
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main className="px-[30px] pt-[30px] pb-[10px]">
            <div className="text-[#475467] leading-[28px] text-[1.125rem] font-normal mb-[30px] bg-amber-100 rounded-lg p-4">
                <span>
                    It's not working yet, but there is real response from the API.
                </span>
            </div>
            <Form
                setItem={setIngredients}
            />

            {ingredients.length > 0 &&
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            }

            {recipeShown && <ClaudeRecipe />}
        </main>
    );
}

export default Main;
