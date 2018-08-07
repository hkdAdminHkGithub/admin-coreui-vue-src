import Vue from 'vue'
import Router from 'vue-router'

// Containers
import DefaultContainer from '../containers/DefaultContainer.vue'

// Views
import Dashboard from '../views/Dashboard.vue'

import Colors from '../views/theme/Colors.vue'
import Typography from '../views/theme/Typography.vue'

import Charts from '../views/Charts.vue'
import Widgets from '../views/Widgets.vue'

// Views - Components
import Cards from '../views/base/Cards.vue'
import Forms from '../views/base/Forms.vue'
import Switches from '../views/base/Switches.vue'
import Tables from '../views/base/Tables.vue'
import Tabs from '../views/base/Tabs.vue'
import Breadcrumbs from '../views/base/Breadcrumbs.vue'
import Carousels from '../views/base/Carousels.vue'
import Collapses from '../views/base/Collapses.vue'
import Jumbotrons from '../views/base/Jumbotrons.vue'
import ListGroups from '../views/base/ListGroups.vue'
import Navs from '../views/base/Navs.vue'
import Navbars from '../views/base/Navbars.vue'
import Paginations from '../views/base/Paginations.vue'
import Popovers from '../views/base/Popovers.vue'
import ProgressBars from '../views/base/ProgressBars.vue'
import Tooltips from '../views/base/Tooltips.vue'

// Views - Buttons
import StandardButtons from '../views/buttons/StandardButtons.vue'
import ButtonGroups from '../views/buttons/ButtonGroups.vue'
import Dropdowns from '../views/buttons/Dropdowns.vue'
import BrandButtons from '../views/buttons/BrandButtons.vue'

// Views - Icons
import Flags from '../views/icons/Flags.vue'
import FontAwesome from '../views/icons/FontAwesome.vue'
import SimpleLineIcons from '../views/icons/SimpleLineIcons.vue'
import CoreUIIcons from '../views/icons/CoreUIIcons.vue'

// Views - Notifications
import Alerts from '../views/notifications/Alerts.vue'
import Badges from '../views/notifications/Badges.vue'
import Modals from '../views/notifications/Modals.vue'

// Views - Pages
import Page404 from '../views/pages/Page404.vue'
import Page500 from '../views/pages/Page500.vue'
import Login from '../views/pages/Login.vue'
import Register from '../views/pages/Register.vue'

// Users
import Users from '../views/users/Users.vue'
import User from '../views/users/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/admin',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [{
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/admin/theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render: c => c('router-view')
          },
          children: [{
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: '/admin/charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: '/admin/widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: '/admin/users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: '',
              component: Users,
            },
            {
              path: '/:id',
              meta: {
                label: 'User Details'
              },
              name: '/User',
              component: User,
            },
          ]
        },
        {
          path: '/admin/base',
          redirect: '/admin/base/cards',
          name: 'Base',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: '/admin/buttons',
          redirect: '/admin/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: '/admin/icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: '/admin/notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/admin/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [{
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})