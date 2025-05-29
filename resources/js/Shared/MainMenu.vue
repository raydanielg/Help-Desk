<template>
  <div>
    <div class="menu-item" v-for="(menu_item, m_index) in menu_items" :key="m_index"
         :class="isUrl(menu_item.url) ? ' active' : ''" v-on="menu_item.submenu?{click: (e) => addActiveClass(e)}:{}">
      <Link class="flex items-center group py-3 menu-link" :href="menu_item.route?route(menu_item.route):'#'" :class="{'have-sub-menu': menu_item.submenu}">
        <icon :name="menu_item.icon" class="w-5 h-5 mr-3 rtl:ml-3 menu__icon" />
        <div class="menu__name">{{ $t(menu_item.name) }}</div>
      </Link>
        <div v-if="menu_item.submenu" class="sub-menu-items">
            <Link class="sub-menu-item" v-for="(sub_menu_item, s_m_index) in menu_item.submenu" :key="s_m_index"
                :class="this.isUrl(sub_menu_item.url) ? ' active' : ''" :href="sub_menu_item.param?route(sub_menu_item.route,sub_menu_item.param):route(sub_menu_item.route)">
                <icon v-if="sub_menu_item.icon" :name="sub_menu_item.icon" class="w-4 h-4 mr-1 rtl:ml-1 menu__icon" />
                <icon v-else name="dash" class="w-4 h-4 mr-1 rtl:mr-1 menu__icon" />
                <div class="menu__name">{{ $t(sub_menu_item.name) }}</div>
            </Link>
        </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/Shared/Icon.vue'
import { Link } from '@inertiajs/vue3'

export default {
  components: {
    Icon,
      Link,
  },
    data(){
      return{
          user: null,
          menu_items: [
              {'name': 'Dashboard', 'route': 'dashboard', 'url': 'dashboard', 'icon': 'dashboard'},
              {'name': 'Tickets', 'route': 'tickets', 'url': 'tickets', 'icon': 'ticket'},
          ],
          enable_option : {}
      }
    },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1)
        currentUrl = currentUrl.replace('dashboard/','')
      if (urls[0] === '') {
        return currentUrl === ''
      }
      return urls.filter(url => currentUrl.startsWith(url)).length
    },
      addActiveClass(e){
          e.currentTarget.classList.toggle('hover')
      }
  },
    created() {
      this.user = this.$page.props.auth.user;
      const user_access = this.user.access

        let enable_option = {}
        if(this.$page.props.enable_options){
            let options = JSON.parse(this.$page.props.enable_options.value)
            options.forEach(option=>{
                enable_option[option.slug] = !!option.value
            })
        }

        if(enable_option.chat && (user_access.chat.read || user_access.chat.update || user_access.chat.create || user_access.chat.delete)){
            this.menu_items.push({'name': 'Chat', 'route': 'chat', 'url': 'chat', 'icon': 'chat'})
        }

        if(enable_option.faq && (user_access.faq.read || user_access.faq.update || user_access.faq.create || user_access.faq.delete)){
            this.menu_items.push({'name': 'FAQs', 'route': 'faqs', 'url': 'faqs', 'icon': 'faq'})
        }

        if(enable_option.blog && (user_access.blog.read || user_access.blog.update || user_access.blog.create || user_access.blog.delete)){
            this.menu_items.push({'name': 'Blog', 'route': 'posts', 'url': 'posts', 'icon': 'post'})
        }

        if(enable_option.kb && (user_access.knowledge_base.read || user_access.knowledge_base.update || user_access.knowledge_base.create || user_access.knowledge_base.delete)){
            this.menu_items.push({'name': 'Knowledge Base', 'route': 'knowledge_base', 'url': 'knowledge_base', 'icon': 'knowledge'})
        }

        if(user_access.customer.read || user_access.customer.update || user_access.customer.create || user_access.customer.delete){
            this.menu_items.push({'name': 'Customers', 'route': 'customers', 'url': 'customers', 'icon': 'all_users'})
        }

        if(enable_option.note){
            this.menu_items.push( {'name': 'Notes', 'route': 'notes', 'url': 'notes', 'icon': 'notes'} )
        }

        if(enable_option.contact && (user_access.contact.read || user_access.contact.update || user_access.contact.create || user_access.contact.delete)){
            this.menu_items.push({'name': 'Contacts', 'route': 'contacts', 'url': 'contacts', 'icon': 'contact'})
        }

        if(enable_option.organization && (user_access.organization.read || user_access.organization.update || user_access.organization.create || user_access.organization.delete)){
            this.menu_items.push({'name': 'Organizations', 'route': 'organizations', 'url': 'organizations', 'icon': 'office'})
        }

        if(user_access.user.read || user_access.user.update || user_access.user.create || user_access.user.delete){
            this.menu_items.push({'name': 'Manage Users', 'route': 'users', 'url': 'users', 'icon': 'users'})
        }

        const settingSubmenus = [];
        if(this.user.role.slug === 'admin'){
            settingSubmenus.push({'name': 'User Roles', 'route': 'roles', 'url': 'settings/roles', 'icon': 'user_role'})
        }

        if(user_access.global.read || user_access.global.update || user_access.global.create || user_access.global.delete){
            settingSubmenus.push({'name': 'Global', 'route': 'global', 'url': 'settings/global', 'icon': 'global_setting'})
        }

        if(user_access.global.read || user_access.global.update || user_access.global.create || user_access.global.delete){
            settingSubmenus.push({'name': 'Custom fields', 'route': 'tickets.builder', 'url': 'settings/custom-form', 'icon': 'form-builder'})

        }

        if(user_access.department.read || user_access.department.update || user_access.department.create || user_access.department.delete){
            settingSubmenus.push({'name': 'Departments', 'route': 'departments', 'url': 'settings/departments', 'icon': 'departments'})
        }

        if(user_access.category.read || user_access.category.update || user_access.category.create || user_access.category.delete){
            settingSubmenus.push({'name': 'Categories', 'route': 'categories', 'url': 'settings/categories', 'icon': 'category'})
        }

        if(user_access.status.read || user_access.status.update || user_access.status.create || user_access.status.delete){
            settingSubmenus.push({'name': 'Status', 'route': 'statuses', 'url': 'settings/statuses', 'icon': 'status'})
        }

        if(user_access.priority.read || user_access.priority.update || user_access.priority.create || user_access.priority.delete){
            settingSubmenus.push({'name': 'Priorities', 'route': 'priorities', 'url': 'settings/priorities', 'icon': 'priorities'})
        }

        if(user_access.type.read || user_access.type.update || user_access.type.create || user_access.type.delete){
            settingSubmenus.push({'name': 'Types', 'route': 'types', 'url': 'settings/types', 'icon': 'types'})
        }

        if(user_access.language.read || user_access.language.update || user_access.language.create || user_access.language.delete){
            settingSubmenus.push({'name': 'Languages', 'route': 'languages', 'url': 'settings/languages', 'icon': 'edit'})
        }

        if(user_access.email_template.read || user_access.email_template.update || user_access.email_template.create || user_access.email_template.delete){
            settingSubmenus.push({'name': 'Email Templates', 'route': 'templates', 'url': 'settings/templates', 'icon': 'email'})
        }

        if(user_access.smtp.read || user_access.smtp.update || user_access.smtp.create || user_access.smtp.delete){
            settingSubmenus.push({'name': 'SMTP Mail', 'route': 'settings.smtp', 'url': 'settings/smtp', 'icon': 'email_template'})
        }

        if(user_access.pusher.read || user_access.pusher.update || user_access.pusher.create || user_access.pusher.delete){
            settingSubmenus.push({'name': 'Pusher Chat', 'route': 'settings.pusher', 'url': 'settings/pusher', 'icon': 'chat'})
        }

        if(this.user.role.slug === 'admin'){
            settingSubmenus.push({'name': 'Email to ticket', 'route': 'settings.piping', 'url': 'settings/piping', 'icon': 'ticket'})
        }

        if(settingSubmenus.length){
            this.menu_items.push({'name': 'Settings', 'route': '', 'url': 'settings', 'icon': 'settings', 'submenu': settingSubmenus })
        }

        if(user_access.front_page.read || user_access.front_page.update || user_access.front_page.create || user_access.front_page.delete){
            this.menu_items.push(
                {'name': 'Front Pages', 'route': '', 'url': 'front_pages', 'icon': 'gear',
                    'submenu': [
                        {'name': 'Home', 'route': 'front_pages.page', 'url': 'front_pages/home', 'icon': 'page', 'param': 'home'},
                        {'name': 'Contact', 'route': 'front_pages.page', 'url': 'front_pages/contact', 'icon': 'page', 'param': 'contact'},
                        {'name': 'Services', 'route': 'front_pages.page', 'url': 'front_pages/services', 'icon': 'page', 'param': 'services'},
                        {'name': 'Privacy Policy', 'route': 'front_pages.page', 'url': 'front_pages/privacy', 'icon': 'page', 'param': 'privacy'},
                        {'name': 'Terms of services', 'route': 'front_pages.page', 'url': 'front_pages/terms', 'icon': 'page', 'param': 'terms'},
                        {'name': 'Footer', 'route': 'front_pages.page', 'url': 'front_pages/footer', 'icon': 'page', 'param': 'footer'},
                    ]
                },
            )
        }

        if(this.user.role.slug === 'admin'){
            this.menu_items.push({'name': 'System Update', 'route': 'settings.update', 'url': 'settings/update', 'icon': 'archive'})
        }
    }
}
</script>
