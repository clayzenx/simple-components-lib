/// <reference types="vite/client" />

type SButtonType = "button" | "link" | "toggle"

interface Color {
  color: string;
  url: string;
}

type Repo = {
  name: string;
  fork: boolean;
  homepage?: string;
  description?: string;
  html_url?: string;
  sourceName?: string;
  language?: string;
  langColor?: string;
  stargazers_count: number;
  forks: number;
  updated_at: string;
} | null

type Colors = { [key: string]: Color } | null
