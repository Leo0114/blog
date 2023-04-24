interface BlogPostFrontmatter {
  title: string;
  date?: string;
  draft?: boolean;
  tags?: string[];
}

export type { BlogPostFrontmatter };
