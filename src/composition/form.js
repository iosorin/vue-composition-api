import { reactive, computed } from '@vue/composition-api';

export default function useForm(props) {
    const form = reactive({
        title: '',
        description: ''
    });

    const valid = computed(() => {
        const validTitle = form.title.trim().length;
        const validDesc = form.description.trim().length;

        return validTitle && validDesc;
    });

    const onSubmit = () => {
        const recipe = {
            title: form.title.trim(),
            description: form.description.trim(),
            id: Date.now().toString()
        };

        form.title = form.description = '';

        props.onAdd(recipe);
    };

    return { form, onSubmit, valid };
}
