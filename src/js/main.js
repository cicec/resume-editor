import Vue from 'vue'

const paper = new Vue({
    el: '#paper',
    data: {
        data: {
            name: '你的姓名',
            intro: '一句话介绍自己，告诉HR为什么选择你而不是别人',
            birthday: '出生日期',
            city: '所在城市',
            workingYears: '工作年限',
            phoneNumber: '电话号码',
            email: '联系邮箱',
            intentionalPost: '意向岗位',
            jobType: '职业类型',
            intentionalCity: '意向城市',
            entryTime: '入职时间',
            selfAssessment: '在这里填写自我评价....',
            educationBackground: [{
                time: '填写时间',
                school: '填写学校名称',
                major: '填写专业名称',
                description: '在这里详细描述你在校期间所学的专业，主要包括课程内容，校内任职，校内荣誉等内容...'
            }],
            projectExperience: [{
                time: '填写时间',
                school: '填写项目名称',
                major: '填写角色名称',
                description: '在这里添加描述....'
            }],
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
                    <span v-if="!editing" v-on:click="edit">{{ data.value }}</span>
                    <input type="text" v-if="editing" v-model="data.value" @blur="save">
                </div>    
            `,
            data() {
                return {
                    data: this.initData,
                    editing: false
                }
            },
            methods: {
                edit() {
                    this.editing = true
                },
                save() {
                    this.editing = false
                    this.$emit('save', { [this.data.key]: this.data.value })
                }
            }
        }
    }
})