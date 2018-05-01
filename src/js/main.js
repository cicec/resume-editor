import Vue from 'vue'

const paper = new Vue({
    el: '#paper',
    data: {
        data: {
            name: '你的姓名',
            intro: '一句话介绍自己，告诉HR为什么选择你而不是别人'
        }
    },
    methods: {
        saveData(data = {}) {
            Object.assign(this.data, data)
        }
    },
    components: {
        'editable-element': {
            props: ['initData'],
            template: `
                <div class="editable-element">
                    <span v-if="!editing" v-on:click="edit">{{ data.content }}</span>
                    <input type="text" v-if="editing" v-model="data.content" @blur="save">
                </div>    
            `,
            data() {
                return {
                    data: {
                        name: this.initData.name,
                        content: this.initData.content,
                    },
                    editing: false
                }
            },
            methods: {
                edit() {
                    this.editing = true
                },
                save() {
                    this.editing = false
                    this.$emit('save', { [this.data.name]: this.data.content })
                }
            }
        }
    }
})