const schema: any = {
  // General list array fields
  general: [
    {
      fields: [
        {
          type: 'checkbox',
          field: 'caseManagement',
          id: 'caseManagement',
          label: 'case management',
        },
        {
          type: 'checkbox',
          field: 'mapTimeline',
          id: 'mapTimeline',
          label: 'map timeline',
        },
        {
          type: 'checkbox',
          field: 'viewsAndBriefings',
          id: 'viewsAndBriefings',
          label: 'views & Briefings',
        },
        {
          type: 'checkbox',
          field: 'notifications',
          id: 'notifications',
          label: 'notifications',
        },
        {
          type: 'checkbox',
          field: 'massCommunications',
          id: 'massCommunications',
          label: 'mass communications',
        },
        {
          type: 'checkbox',
          field: 'traficCamera',
          id: 'traficCamera',
          label: 'trafic Camera',
        },
      ],
    },
  ],

  // users list array fields
  users: [
    {
      title: 'Setings',
      fields: [
        {
          type: 'checkbox',
          field: 'auditLog',
          id: 'auditLog',
          label: 'audit log',
          subList: false,
        },
        {
          type: 'checkbox',
          field: 'user.users',
          id: 'user.users',
          label: 'users',
          subList: true,
        },
        {
          type: 'checkbox',
          field: 'user.add',
          id: 'user.add',
          label: 'Users add',
          select: false,
        },
        {
          type: 'checkbox',
          field: 'user.delete',
          id: 'user.delete',
          label: 'Users delete',
          select: false,
        },
        {
          type: 'checkbox',
          field: 'user.edit',
          id: 'user.edit',
          label: 'Users edit',
          select: false,
        },
        {
          type: 'checkbox',
          field: 'user.maxUsers.valid',
          id: 'user.maxUsers.valid',
          label: 'max users',
          selectValue: 'user.maxUsers.value',
          select: true,
        },
      ],
    },
  ],

  // alert list array fileds
  alerts: [
    {
      title: 'alerts',
      fields: [
        {
          type: 'checkbox',
          field: 'alertManager',
          id: 'alertManager',
          label: 'alert manager',
          select: false,
        },
        {
          type: 'checkbox',
          field: 'alertRules.valid',
          id: 'alertRules.valid',
          label: 'Alert Rules',
          selectValue: 'alertRules.value',
          select: true,
        },
      ],
    },
  ],

  // General list validation fields
  caseManagement: true,
  mapTimeline: true,
  viewsAndBriefings: true,
  notifications: true,
  massCommunications: true,
  traficCamera: true,
  auditLog: true,

  // User list validation fields
  user: {
    users: true,
    add: true,
    delete: false,
    edit: true,
    maxUsers: { value: 10, valid: true },
  },

  // Alert list validation fields
  alertManager: true,
  alertRules: { value: 10, valid: true },
};

export default schema;
