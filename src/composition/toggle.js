import { ref } from '@vue/composition-api';

export default function useToggle() {
    const visible = ref(true);

    const toggle = () => {
        visible.value = !visible.value;
    };

    return { visible, toggle };
}
