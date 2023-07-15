const mapping: Record<string, string> = {
  'contact-forms': 'contact_form',
  organizations: 'organization',
  projects: 'project',
  skills: 'skill',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
