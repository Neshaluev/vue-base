import type { VNode, VNodeProps } from "vue";
import { cloneVNode } from "vue";

export function cloneElement<T, U>(
  vnode: VNode<T, U> | VNode<T, U>[],
  nodeProps: Record<string, any> &
    Omit<VNodeProps, "ref"> & { ref?: VNodeProps["ref"] | any } = {},
  override = true,
  mergeRef = false
) {
  const elem = vnode;
  if (!elem) return null;
  const node = cloneVNode(elem as VNode<T, U>, nodeProps as any, mergeRef);
  node.props = (override ? { ...node.props, ...nodeProps } : node.props) as any;
  return node;
}
