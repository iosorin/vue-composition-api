import { ref } from '@vue/composition-api';

export default function useRecipes() {
    const recipes = ref([]);
    const current = ref(null);


    const addRecipe = (recipe) => {
        recipes.value.push(recipe);
    };

    const selectRecipe = (id) => {
        current.value = recipes.value.find(el => el.id === id);
    };

    const removeRecipe = (id) => {
        current.value = null;

        recipes.value = recipes.value.filter(el => el.id !== id);
    };

    return {
        recipes,
        current,
        addRecipe,
        selectRecipe,
        removeRecipe
    };
}
