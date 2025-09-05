import { baseConfig } from "@halvaradop/eslint-config/base"
import { nextConfig } from "@halvaradop/eslint-config/nextjs"
import { reactConfig } from "@halvaradop/eslint-config/react"
import { turborepoConfig } from "@halvaradop/eslint-config/turbo"
import { prettierConfig } from "@halvaradop/eslint-config/prettier"
import { tsConfig } from "@halvaradop/eslint-config/typescript"

export default [...baseConfig, ...nextConfig, ...reactConfig, ...turborepoConfig, ...prettierConfig, ...tsConfig]
