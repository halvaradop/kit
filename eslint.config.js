import { baseConfig } from "@halvaradop/eslint-config/base"
import { nextConfig } from "@halvaradop/eslint-config/next"
import { reactConfig } from "@halvaradop/eslint-config/react"
import { turboConfig } from "@halvaradop/eslint-config/turbo"
import { prettierConfig } from "@halvaradop/eslint-config/prettier"
import { typescriptConfig } from "@halvaradop/eslint-config/typescript"

export default [...baseConfig, ...nextConfig, ...reactConfig, ...turboConfig, ...prettierConfig, ...typescriptConfig]
