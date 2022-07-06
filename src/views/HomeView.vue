<template>
    <BaseLayout>
        <div class="home">
            <h1>Home Page</h1>
            <div class="posts-container">
                <div class="posts-list">
                    <div class="posts-item" v-for="p in posts" :key="p.id">
                        <h2>{{ p.title }}</h2>

                        <div class="posts-container-image">
                            <img src="https://picsum.photos/500/500" alt="" />
                        </div>
                        <p>{{ p.description }}</p>
                        <span>{{ p.created_at }}</span>
                        <div class="posts-controller">
                            <div class="posts-controller-comments">
                                Comments: (0)
                            </div>
                            <div class="posts-controller-buttons">
                                <d-button>See post</d-button>
                                <d-button color="primary">Update post</d-button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref="target"
                    class="posts-loader"
                    style="padding: 30px; background-color: red"
                >
                    <!-- <h3>Loader</h3> -->
                    <div v-if="isLoadingPosts">Loading posts...</div>
                </div>
            </div>
        </div>
    </BaseLayout>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import SearchSvg from '@/components/base/icons/search.vue'
import LoadingSvg from '@/components/base/icons/loading.vue'
import LoadingCircleSvg from '@/components/base/icons/loadingCircle.vue'
import BaseLayout from '@/components/BaseLayout.vue'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

export default defineComponent({
    name: 'HomeView',
    data() {
        return {
            // posts: [
            //   {
            //     id: "1",
            //     title: "title post",
            //     description:
            //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi, reiciendis consequuntur aut neque similique sed est alias eos soluta.",
            //     image: "https://picsum.photos/500/500",
            //     created_at: "10/02/2022",
            //     authorId: "9284sdmksd",
            //   },
            //   {
            //     id: "2",
            //     title: "title post",
            //     description:
            //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi, reiciendis consequuntur aut neque similique sed est alias eos soluta.",
            //     image: "https://picsum.photos/500/500",
            //     created_at: "10/02/2022",
            //     authorId: "9284sdmksd",
            //   },
            //   {
            //     id: "3",
            //     title: "title post",
            //     description:
            //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi, reiciendis consequuntur aut neque similique sed est alias eos soluta.",
            //     image: "https://picsum.photos/500/500",
            //     created_at: "10/02/2022",
            //     authorId: "9284sdmksd",
            //   },
            //   {
            //     id: "4",
            //     title: "title post",
            //     description:
            //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi, reiciendis consequuntur aut neque similique sed est alias eos soluta.",
            //     image: "https://picsum.photos/500/500",
            //     created_at: "10/02/2022",
            //     authorId: "9284sdmksd",
            //   },
            //   {
            //     id: "5",
            //     title: "title post",
            //     description:
            //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi, reiciendis consequuntur aut neque similique sed est alias eos soluta.",
            //     image: "https://picsum.photos/500/500",
            //     created_at: "10/02/2022",
            //     authorId: "9284sdmksd",
            //   },
            // ],
        }
    },
    components: {
        BaseLayout,
    },
    setup() {
        const store = useStore()
        let posts = computed(() => store.state.posts.items)
        const isLoadingPosts = computed(() => store.state.posts.isLoading)

        let target = ref(null)

        function fetchPosts(interseption) {
            if (!isLoadingPosts.value && interseption[0].isIntersecting) {
                store.dispatch('posts/fetchItems')
            }
        }

        useIntersectionObserver(target, fetchPosts)

        return { target, isLoadingPosts, fetchPosts, posts }
    },
})
</script>
