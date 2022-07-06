import { defineComponent, ref, computed } from 'vue'

import LoadingIcon from '@/components/base/icons/loadingCircle.vue'

// const buttonProps = () => ({
//   class: 'btn'
// })

export default defineComponent({
    name: 'DButton',
    inheritAttrs: false,
    props: ['loading', 'shape', 'color', 'href', 'disabled', 'size', 'full'],
    setup(props, { slots, attrs, emit }) {
        const buttonNodeRef = ref<HTMLElement | null>(null)

        return () => {
            const classes = computed(() => {
                const { shape, color, size, disabled, full } = props

                return {
                    [`btn`]: true,
                    [`btn-shape`]: shape,
                    [`btn-size-${size}`]: size,
                    [`btn-color-${color}`]: color,
                    [`btn-full`]: typeof full === 'string',
                    [`btn-${disabled}`]: disabled,
                }
            })

            const children = slots.default?.()[0]?.children

            const icon = function () {
                if (slots.icon || props.loading) {
                    return slots.icon && !props.loading ? (
                        slots.icon()
                    ) : (
                        <LoadingIcon />
                    )
                }

                return undefined
            }

            function handleClick(event: any) {
                emit('click', event)
            }

            const buttonProps = {
                ...attrs,
                class: [classes.value],
                disabled: props.disabled,
                onClick: handleClick,
            }
            const buttonNode = (
                <button {...buttonProps} ref={buttonNodeRef}>
                    {icon()}
                    <span>{children}</span>
                </button>
            )
            return buttonNode
        }
    },
})
