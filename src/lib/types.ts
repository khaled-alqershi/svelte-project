export type User = { 
    id: number; 
    name: string; 
    email: string; 
    website: string;
    phone: string;
}
export type NavItem = { name: string; path: string; };

export type Post = { id: number; title: string; body: string; userId: number; };
