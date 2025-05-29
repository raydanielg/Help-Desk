<template>
    <div>
        <Head :title="$t(title)" />
        <div class="flex flex-col md:flex-row gap-3 mb-4 justify-between items-center ticket-filters">
            <div class="flex flex-col md:flex-row gap-2">
                <select v-model="form.limit" class="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block px-2 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <label for="importCSV" class="uppercase gap-[1px] cursor-pointer text-sm px-3 py-1 flex items-center justify-center">
                    <img class="w-6 h-6" src="/images/svg/import-csv.svg" alt="Import CSV" />
                    <span>{{ $t('Import') }}</span>
                    <input @change="uploadImportCSV" class="hidden" id="importCSV" type="file" />
                </label>
                <a class="uppercase gap-[1px] cursor-pointer text-sm px-3 py-1 flex items-center justify-center" href="/dashboard/ticket/csv/export">
                    <img class="w-6 h-6" src="/images/svg/export-csv.svg" alt="Export CSV" />
                    <span>{{ $t('Export') }}</span>
                </a>
            </div>
            <div class="filter-add-new flex flex-col gap-3 md:flex-row items-center">
                <search-input v-model="form.search" placeholder="Search by Key, Subject, Priority, Status, Assign to..." class="w-full max-w-md search" @reset="reset"></search-input>

                <Link class="btn-indigo" :href="this.route('tickets.create')">
                    <span>{{ $t('New Ticket') }}</span>
                </Link>
            </div>
        </div>
        <div class="flex flex-col gap-3 mb-4 md:flex-row w-full items-center ticket-filters">
            <div class="mr-2 w-full">{{ $t('Filter Ticket By') }}:</div>
            <select-input v-if="!(hidden_fields && hidden_fields.includes('ticket_type'))" v-model="form.type_id" class="mr-2 w-full">
                <option :value="null">{{ $t('Type') }}</option>
                <option v-for="s in types" :key="s.id" :value="s.id">{{ s.name }}</option>
            </select-input>
            <select-input v-if="!(hidden_fields && hidden_fields.includes('category'))" v-model="form.category_id" class="mr-2 w-full">
                <option :value="null">{{ $t('Category') }}</option>
                <option v-for="s in categories" :key="s.id" :value="s.id">{{ s.name }}</option>
            </select-input>
            <select-input v-if="!(hidden_fields && hidden_fields.includes('department'))" v-model="form.department_id" class="mr-2 w-full">
                <option :value="null">{{ $t('Department') }}</option>
                <option v-for="s in departments" :key="s.id" :value="s.id">{{ s.name }}</option>
            </select-input>
            <select-input v-model="form.priority_id" class=" mr-2 w-full">
                <option :value="null">{{ $t('Priority') }}</option>
                <option v-for="s in priorities" :key="s.id" :value="s.id">{{ s.name }}</option>
            </select-input>
            <select-input v-model="form.status_id" class="mr-2 w-full">
                <option :value="null">{{ $t('Status') }}</option>
                <option v-for="s in statuses" :key="s.id" :value="s.id">{{ s.name }}</option>
            </select-input>
            <select-input-filter :placeholder="$t('Assign To')" :onInput="doFilter" @focus="doFilter" :items="assignees"
                                 v-if="!(hidden_fields && hidden_fields.includes('assigned_to')) && user_access.ticket.update"
                                 v-model="form.assigned_to" class=" w-full">
            </select-input-filter>
        </div>
        <div class="bg-white rounded-md shadow overflow-x-auto">
            <table class="min-w-full whitespace-nowrap ticket_list">
                <tbody>
                <tr class="text-left font-bold">
                    <th v-for="(h, i) in headers" :key="i">
            <span :class="{'sort': h.sort, 'active' : form.field === h.name},form.direction">{{ $t(h.name) }}
              <span v-if="h.sort" class="icons">
                <icon class="fill-gray-300" :class="{'fill-gray-800': (form.direction === 'desc' && form.field === h.value)}" name="up" @click="sort(h.value)" />
                <icon class="fill-gray-300" :class="{'fill-gray-800': form.direction === 'asc' && form.field === h.value}" name="down" @click="sort(h.value)" />
              </span>
            </span>
                    </th>
                </tr>
                <tr v-for="ticket in tickets.data" :key="ticket.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                    <td class="border-t">
                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('tickets.edit', ticket.uid || ticket.id)">
                            #{{ ticket.uid }}
                        </Link>
                    </td>
                    <td class="border-t">
                        <Link class="s__details flex flex-col" :href="route('tickets.edit', ticket.uid || ticket.id)">
                          <span class="subject_t">{{ ticket.subject }}</span>
                          <span class="user__d flex text-xs items-center pt-1">
                            <span v-if="ticket.user" class="user__n flex items-center pr-4" title="Client">
                              <icon name="user" class="flex-shrink-0 h-3 fill-gray-400 pr-1" />
                              {{ ticket.user }}
                            </span>
                            <span v-if="ticket.assigned_to" class="user__n flex items-center pr-4" title="Assignee">
                              <icon name="user-check" class="flex-shrink-0 h-3 fill-gray-400 pr-1" />
                              {{ ticket.assigned_to }}
                            </span>
                          </span>
                        </Link>

                    </td>
                    <td class="border-t">
                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('tickets.edit', ticket.uid || ticket.id)">
                            {{ ticket.priority }}
                        </Link>
                    </td>
                    <td class="border-t">
                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('tickets.edit', ticket.uid || ticket.id)">
                            {{ ticket.status }}
                        </Link>
                    </td>
                    <td class="border-t">
                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('tickets.edit', ticket.uid || ticket.id)">
                            {{ $t('error') === 'error' ? moment(ticket.created_at).fromNow() : moment(ticket.created_at).locale('zh-tw').fromNow() }}
                        </Link>
                    </td>
                    <td class="border-t">
                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('tickets.edit', ticket.uid || ticket.id)">
                            {{ $t('error') === 'error' ? moment(ticket.updated_at).fromNow() : moment(ticket.updated_at).locale('zh-tw').fromNow() }}
                        </Link>
                    </td>
                </tr>
                <tr v-if="tickets.data.length === 0">
                    <td class="border-t px-6 py-4" colspan="9">{{ $t('No ticket found.') }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <pagination class="mt-4" :links="tickets.links" />
    </div>
</template>

<script>
import { Link, Head } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import Layout from '@/Shared/Layout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Pagination from '@/Shared/Pagination.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import SearchInput from '@/Shared/SearchInput.vue'
import SelectInputFilter from '@/Shared/SelectInputFilter.vue'
import moment from 'moment'
import axios from 'axios'

export default {
    metaInfo: { title: 'Tickets' },
    components: {
        SearchInput,
        Icon,
        Link,
        Head,
        Pagination,
        SelectInputFilter,
        SelectInput,
    },
    layout: Layout,
    props: {
        filters: Object,
        tickets: Object,
        assignees: Array,
        auth: Object,
        title: String,
        priorities: Array,
        statuses: Array,
        types: Array,
        categories: Array,
        departments: Array,
        hidden_fields: Object,
    },
    remember: 'form',
    data() {
        return {
            headers: [
                {name: 'Key', value: 'id', sort: true},
                {name: 'Subject', value: 'subject', sort: true},
                {name: 'Priority', value: 'priority_id', sort: true},
                {name: 'Status', value: 'status_id', sort: true},
                {name: 'Date', value: 'created_at', sort: true},
                {name: 'Updated', value: 'updated_at', sort: true},
            ],
            user_access: this.$page.props.auth.user.access,
            form: {
                search: this.filters.search,
                limit: this.filters.limit ?? 10,
                customer_id: this.filters.customer_id,
                field: this.filters.field,
                direction: this.filters.direction,
                priority_id: this.filters.priority_id ?? null,
                status_id: this.filters.status_id ?? null,
                type_id: this.filters.type_id ?? null,
                category_id: this.filters.category_id ?? null,
                department_id: this.filters.department_id ?? null,
            },
        }
    },
    watch: {
        form: {
            deep: true,
            handler: throttle(function() {
                this.$inertia.get(this.route('tickets'), pickBy(this.form), { replace: true, preserveState: true })
            }, 150),
        },
    },
    methods: {
        doFilter(e){
            axios.get(this.route('filter.assignees', {search: e.target.value})).then((res)=>{
                this.assignees.splice(0, this.assignees.length, ...res.data);
            })
        },
        sort(field) {
            this.form.field = field;
            this.form.direction = this.form.direction === 'asc' ? 'desc' : 'asc';
        },
        reset() {
            this.form = mapValues(this.form, () => null)
        },
        uploadImportCSV(e){
            if(e.target.files.length){
                this.$inertia.form({file: e.target.files[0]}).post(this.route('ticket.csv.import'))
            }
        }
    },
    created() {
        this.moment = moment;
    }
}
</script>
