<template>
  <div>
      <Head :title="$t('Dashboard')" />

      <div class="badge__items flex flex-col lg:flex-row gap-5">
          <div class="badge__item h-32 w-full lg:w-1/4 cursor-pointer" @click="goToLink(this.route('tickets', {'type': 'new'}))">
              <div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full">
                  <div class="badge__info">
                      <span class="title">{{ $t('New Tickets') }}</span>
                      <span class="number">{{ new_tickets }}</span>
                  </div>
                  <div class="a__right">
                      <div class="round_circle pr-3 rtl:pl-3">
                          <div class="pie animate" :style="{ '--pie_val': parseInt((new_tickets * 100)/total_tickets) }"> {{ parseInt((new_tickets * 100)/total_tickets) || 0 }}%</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="badge__item h-32 w-full lg:w-1/4 cursor-pointer" @click="goToLink(this.route('tickets', {'type': 'open'}))">
              <div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full">
                  <div class="badge__info">
                      <span class="title">{{ $t('Open Tickets') }}</span>
                      <span class="number">{{ opened_tickets }}</span>
                  </div>
                  <div class="a__right">
                      <div class="round_circle pr-3 rtl:pl-3">
                          <div class="pie animate" :style="{ '--pie_val': parseInt((opened_tickets * 100)/total_tickets) }"> {{ parseInt((opened_tickets * 100)/total_tickets) || 0 }}%</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="badge__item h-32 w-full lg:w-1/4 cursor-pointer" @click="goToLink(this.route('tickets', {'search': 'close'}))">
              <div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full">
                  <div class="badge__info">
                      <span class="title">{{ $t('Closed Tickets') }}</span>
                      <span class="number">{{ closed_tickets }}</span>
                  </div>
                  <div class="a__right">
                      <div class="round_circle pr-3 rtl:pl-3">
                          <div class="pie animate" :style="{ '--pie_val': parseInt((closed_tickets * 100)/total_tickets) }"> {{ parseInt((closed_tickets * 100)/total_tickets) || 0 }}%</div>
                      </div>
                  </div>
              </div>
          </div>
          <div v-if="auth.user.role.slug !== 'customer'" class="badge__item h-32 w-full lg:w-1/4 cursor-pointer" @click="goToLink(this.route('tickets', {'type': 'un_assigned'}))">
              <div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full">
                  <div class="badge__info">
                      <span class="title">{{ $t('Unassigned Tickets') }}</span>
                      <span class="number">{{ un_assigned_tickets }}</span>
                  </div>
                  <div class="a__right">
                      <div class="round_circle pr-3 rtl:pl-3">
                          <div class="pie animate" :style="{ '--pie_val': parseInt((un_assigned_tickets * 100)/total_tickets) }"> {{ parseInt((un_assigned_tickets * 100)/total_tickets) || 0 }}%</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="response__details mt-8 flex gap-5 flex-col lg:flex-row" v-if="auth.user.role.slug !== 'customer'">
          <div class="w-full">
              <div class="r__wrapper flex flex-col pl-5 pr-5 pb-5 bg-white items-center rounded-lg shadow-lg rd">
                  <h2 class="th__ttl font-bold text-lg pt-3">{{ $t('Ticket by department') }}</h2>
                  <div class="th__info flex flex-col pt-3">
                      <vc-donut
                          background="white" foreground="grey"
                          :size="120" unit="px" :thickness="45"
                          has-legend legend-placement="right"
                          :sections="top_departments" :total="100"
                          :start-angle="0" :auto-adjust-text-size="true">
                      </vc-donut>
                  </div>
              </div>
          </div>
          <div class="w-full">
              <div class="r__wrapper flex flex-col pl-5 pr-5 pb-5 bg-white items-center rounded-lg shadow-lg rd">
                  <h2 class="th__ttl font-bold text-lg pt-3">{{ $t('Ticket by type') }}</h2>
                  <div class="th__info flex flex-col pt-3">
                      <vc-donut
                          background="white" foreground="grey"
                          :size="120" unit="px" :thickness="45"
                          has-legend legend-placement="right"
                          :sections="top_types" :total="100"
                          :start-angle="0" :auto-adjust-text-size="true">
                      </vc-donut>
                  </div>
              </div>
          </div>
          <div class="w-full">
              <div class="r__wrapper flex flex-col pl-5 pl-5 pb-5 bg-white items-center rounded-lg shadow-lg rd">
                  <h2 class="th__ttl font-bold text-lg pt-3">{{ $t('Top ticket creator') }}</h2>
                  <div class="th__info flex flex-col pt-3">
                      <vc-donut
                          background="white" foreground="grey"
                          :size="120" unit="px" :thickness="45"
                          has-legend legend-placement="right"
                          :sections="top_creators" :total="100"
                          :start-angle="0" :auto-adjust-text-size="true">
                      </vc-donut>
                  </div>
              </div>
          </div>
      </div>
      <div class="response__details flex flex-col lg:flex-row mt-8 gap-5" v-if="auth.user.role.slug !== 'customer'">
          <div class="flex gap-5 flex-col lg:flex-row lg:w-10/12">
              <div class="w-full">
                  <div class="r__wrapper flex flex-col p-5 bg-white rounded-lg shadow-lg rd">
                      <h2 class="th__ttl font-bold text-lg pt-3">{{ $t('Ticket history') }}</h2>
                      <div class="th__info flex">
                          <span class="text-2xl font-bold"> {{ chart_line.this_month }} </span>
                          <span class="pt-2 text-xs pl-1 pr-1">/ {{ $t('this month') }}</span>
                          <span class="pt-2 text-xs font-bold pl-2 pr-2">{{ $t('last month') }} {{ chart_line.last_month }}</span>
                      </div>
                      <div v-if="months.length" class="flex w-full justify-center c__wrapper ">
                          <div class="c__line flex flex-col w-full items-center gap-3" v-for="cl in months">
                              <span class="cl__b" :style="{ '--cl_value': cl.value }"></span>
                              <span class="cl__n text-xs">{{ cl.month }}</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class=" rd w-full lg:w-2/5">
                  <div class="r__wrapper flex flex-col pl-5 pr-5 pb-5 bg-white rounded-lg shadow-lg rd">
                      <div class="res__info">
                          <span class="title">{{ $t('First Response Time') }}</span>
                          <span class="res_avg">{{ $t('Average') }}</span>
                          <div class="flex justify-start">
                              <div v-if="firstResponse.length" v-for="(fr, fri) in firstResponse" class="res_time pr-5" :key="fri">
                                  <span class="num">{{ fr[0] }}</span>
                                  <span class="text">{{ $t(fr[1]) }}</span>
                              </div>
                              <div v-else class="res_time pr-5">
                                  0
                              </div>
                          </div>
                      </div>
                      <div class="tc__info">
                          <span class="title">{{ $t('Last Response Time') }}</span>
                          <span class="res_avg">{{ $t('Average') }}</span>
                          <div class="flex justify-start">
                              <div v-if="lastResponse.length" v-for="(fr, fri) in lastResponse" class="res_time pr-5" :key="fri">
                                  <span class="num">{{ fr[0] }}</span>
                                  <span class="text">{{ $t(fr[1]) }}</span>
                              </div>
                              <div v-else class="res_time pr-5">
                                  0
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="flex gap-5 flex-col lg:w-2/12">
              <div class="badge__item h-32 w-full cursor-pointer" @click="goToLink(this.route('users'))">
                  <div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full">
                      <div class="badge__info">
                          <span class="title">{{ $t('Customers') }}</span>
                          <span class="number">{{ total_customer }}</span>
                      </div>
                      <div class="a__right">
                          <icon name="pending_users" class="h-5 fill-gray-400 mr-5 ml-5" />
                      </div>
                  </div>
              </div>
              <div class="badge__item h-32 w-full cursor-pointer" @click="goToLink(this.route('contacts'))">
                  <div class="l__items bg-white rounded-lg shadow-lg flex justify-between w-full">
                      <div class="badge__info">
                          <span class="title">{{ $t('Contacts') }}</span>
                          <span class="number">{{ total_contacts }}</span>
                      </div>
                      <div class="a__right">
                          <icon name="contact" class="h-5 fill-gray-400 mr-5 ml-5" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Loading Process -->
      <div v-if="loading" class="processing-overlay">
          <div class="background"></div>
          <div class="loader">
              `<svg width="200px" height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;">
                  <circle cx="75" cy="50" fill="#ffffff" r="6.39718">
                      <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.875s"></animate>
                  </circle>
                  <circle cx="67.678" cy="67.678" fill="#ffffff" r="4.8">
                      <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.75s"></animate>
                  </circle>
                  <circle cx="50" cy="75" fill="#ffffff" r="4.8">
                      <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.625s"></animate>
                  </circle>
                  <circle cx="32.322" cy="67.678" fill="#ffffff" r="4.8">
                      <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate>
                  </circle>
                  <circle cx="25" cy="50" fill="#ffffff" r="4.8">
                      <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.375s"></animate>
                  </circle>
                  <circle cx="32.322" cy="32.322" fill="#ffffff" r="4.80282">
                      <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.25s"></animate>
                  </circle>
                  <circle cx="50" cy="25" fill="#ffffff" r="6.40282">
                      <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="-0.125s"></animate>
                  </circle>
                  <circle cx="67.678" cy="32.322" fill="#ffffff" r="7.99718">
                      <animate attributeName="r" values="4.8;4.8;8;4.8;4.8" times="0;0.1;0.2;0.3;1" dur="1s" repeatCount="indefinite" begin="0s"></animate>
                  </circle>
              </svg>`
          </div>
      </div>
      <!-- Loading Process -->

  </div>
</template>

<script>
import {Head, Link} from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import Icon from '@/Shared/Icon.vue'

export default {
  metaInfo: { title: 'Dashboard' },
    components: {
        Head,
        Icon,
        Link,
    },
  layout: Layout,
    props: {
        auth: Object,
        entries: Array,
        chart_line: Object,
        api_key: String,
        new_tickets: Number,
        total_tickets: Number,
        un_assigned_tickets: Number,
        opened_tickets: Number,
        closed_tickets: Number,
        first_response: Array,
        top_creators: Array,
        last_response: Array,
        top_departments: Array,
        top_types: Array,
        total_customer: Number,
        total_contacts: Number,
    },
    data() {
        return {
            errors: [],
            loading: false,
            firstResponse: [],
            lastResponse: [],
            months: []
        }
    },
    created() {
        for (let i = 0; i < this.first_response.length; i++) {
            if(i % 2 === 0){
                this.firstResponse = [...this.firstResponse, [this.first_response[i], this.first_response[i+1]]]
            }
        }
        for (let i = 0; i < this.last_response.length; i++) {
            if(i % 2 === 0){
                this.lastResponse = [...this.lastResponse, [this.last_response[i], this.last_response[i+1]]]
            }
        }

        this.months = this.chart_line.previousMonths.map( m =>{
            return { 'month': m, 'value': this.chart_line.months[m] ? ((this.chart_line.months[m] * 100)/this.chart_line.total)+'%': '0%' }
        })
    },
    methods: {
        goToLink(link){
            window.location.href = link;
        },
    },
}
</script>
