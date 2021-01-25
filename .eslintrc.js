/*
 * @Author: Vincent
 * @Date: 2021-01-14 10:43:13
 * @LastEditTime: 2021-01-25 14:49:20
 * @LastEditors: Vincent
 * @Description:
 */
// /*
//  * @Author: Vincent
//  * @Date: 2021-01-14 10:43:13
//  * @LastEditTime: 2021-01-14 14:59:59
//  * @LastEditors: Vincent
//  * @Description:
//  */
// module.exports = {
//   env: {
//     browser: true, // 浏览器环境中的全局变量
//     es6: true, // 启用除了modules外的所有es6特性
//     node: true,
//   },
//   extends: ['eslint:recommended', 'prettier', 'plugin:compat/recommended'],
//   //   设置全局变量
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   //   指定解析器
//   parser: 'babel-eslint', // 兼容ES处于实验性阶段的语法，如类属性用‘=’赋值
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//       generator: true,
//       experimentalObjectRestSpread: true,
//     },
//     ecmaVersion: '2018',
//     sourceType: 'module',
//   },
//   //   第三方插件
//   plugins: ['react'],
//   //   规则
//   //   0-不禁用 1-发出警告但不影响运行 2-报错并终止运行
//   rules: {
//     quotes: [2, 'single'], // 采用单引号
//     'no-console': 1, // 警告采用console
//     'no-debugger': 1,
//     'no-var': 2,
//     'no-trailing-spaces': 1, // 一行结束后面有空格发出警告
//     'eol-last': 0, // 文件以单一的换行符结束
//     'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
//     'no-const-assign': 2, //禁止修改const声明的变量
//     'no-duplicate-case': 2, //switch中的case标签不能重复
//     'no-spaced-func': 2, //函数名调用时，函数名和括号之间不能有空格
//     'no-use-before-define': 2, //未定义前不能使用
//     'no-undef': 2, //不能有未定义的变量
//     camelcase: 0, //强制驼峰式命名
//     'jsx-quotes': [2, 'prefer-double'], //强制在jsx属性中一致使用双引号
//     'jsx-a11y/no-noninteractive-element-interactions': 0,
//     'jsx-a11y/click-events-have-key-events': 0,
//     'jsx-a11y/no-static-element-interactions': 0,
//     'jsx-a11y/anchor-is-valid': 0,
//     'react/jsx-filename-extension': [1, { extensions: ['.js', 'jsx'] }],
//     'react/jsx-wrap-multilines': 0,
//     'react/jsx-one-expression-per-line': 0,
//     'react/prefer-stateless-function': 0,
//     'react/prop-types': 0,
//     'react/forbid-prop-types': 0,

//     'react/jsx-boolean-value': 2, //在JSX中强制布尔属性符号
//     'react/jsx-closing-bracket-location': 1, //在JSX中验证右括号位置
//     'react/jsx-curly-spacing': [2, { when: 'never', children: true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
//     'react/jsx-indent-props': [2, 4], //验证JSX中的props缩进
//     'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
//     'react/jsx-max-props-per-line': [1, { maximum: 1 }], // 限制JSX中单行上的props的最大数量
//     'react/jsx-no-bind': 0, //JSX中不允许使用箭头函数和bind
//     'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
//     'react/jsx-no-literals': 0, //防止使用未包装的JSX字符串
//     'react/jsx-no-undef': 1, //在JSX中禁止未声明的变量
//     'react/jsx-pascal-case': 0, //为用户定义的JSX组件强制使用PascalCase
//     'react/jsx-sort-props': 2, //强化props按字母排序
//     'react/jsx-uses-react': 1, //防止反应被错误地标记为未使用
//     'react/jsx-uses-vars': 2, //防止在JSX中使用的变量被错误地标记为未使用
//   },
//   //   设置
//   settings: {
//     'import/ignore': ['node_modules'],
//     react: {
//       pragma: 'React',
//       version: 'detect',
//     },
//   },
// };
// module.exports = {
//   // 指定脚本的运行环境，一个环境定义了一组预定义的全局变量
//   env: {
//     browser: true, //浏览器环境中的全局变量
//     es6: true, //启用除了modules以外的所有ES6特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
//     node: true, //Node.js 全局变量和 Node.js 作用域
//   },
//   extends: [
//     'eslint:recommended', //所有在规则页面被标记为“✔️”的规则将会默认开启
//     'plugin:react/recommended',
//   ],
//   // 设置全局变量
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   // 指定解析器
//   parser: 'babel-eslint', //兼容ES处于实验性阶段的语法，如类属性用”=“赋值
//   // 指定解析器选项
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//       generators: true,
//       experimentalObjectRestSpread: true,
//     },
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   // 第三方插件
//   plugins: ['react', 'class-property'],
//   rules: {
//     quotes: [2, 'single'], //单引号
//     'no-console': 0, //不禁用console
//     'no-debugger': 2, //禁用debugger
//     'no-var': 0, //对var警告
//     semi: 0, //不强制使用分号
//     'no-irregular-whitespace': 0, //不规则的空白不允许
//     'no-trailing-spaces': 1, //一行结束后面有空格就发出警告
//     'eol-last': 0, //文件以单一的换行符结束
//     'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
//     'no-underscore-dangle': 0, //标识符不能以_开头或结尾
//     'no-alert': 2, //禁止使用alert confirm prompt
//     'no-lone-blocks': 0, //禁止不必要的嵌套块
//     'no-class-assign': 2, //禁止给类赋值
//     'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
//     'no-const-assign': 2, //禁止修改const声明的变量
//     'no-delete-var': 2, //不能对var声明的变量使用delete操作符
//     'no-dupe-keys': 2, //在创建对象字面量时不允许键重复
//     'no-duplicate-case': 2, //switch中的case标签不能重复
//     'no-dupe-args': 2, //函数参数不能重复
//     'no-empty': 2, //块语句中的内容不能为空
//     'no-func-assign': 2, //禁止重复的函数声明
//     'no-invalid-this': 0, //禁止无效的this，只能用在构造器，类，对象字面量
//     'no-redeclare': 2, //禁止重复声明变量
//     'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
//     'no-this-before-super': 0, //在调用super()之前不能使用this或super
//     'no-undef': 2, //不能有未定义的变量
//     'no-use-before-define': 2, //未定义前不能使用
//     camelcase: 0, //强制驼峰法命名
//     'jsx-quotes': [2, 'prefer-double'], //强制在JSX属性（jsx-quotes）中一致使用双引号
//     'react/display-name': 0, //防止在React组件定义中丢失displayName
//     'react/forbid-prop-types': [2, { forbid: ['any'] }], //禁止某些propTypes
//     'react/jsx-boolean-value': 2, //在JSX中强制布尔属性符号
//     'react/jsx-closing-bracket-location': 1, //在JSX中验证右括号位置
//     'react/jsx-curly-spacing': [2, { when: 'never', children: true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
//     'react/jsx-indent-props': [2, 4], //验证JSX中的props缩进
//     'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
//     'react/jsx-max-props-per-line': [1, { maximum: 1 }], // 限制JSX中单行上的props的最大数量
//     'react/jsx-no-bind': 0, //JSX中不允许使用箭头函数和bind
//     'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
//     'react/jsx-no-literals': 0, //防止使用未包装的JSX字符串
//     'react/jsx-no-undef': 1, //在JSX中禁止未声明的变量
//     'react/jsx-pascal-case': 0, //为用户定义的JSX组件强制使用PascalCase
//     'react/jsx-sort-props': 2, //强化props按字母排序
//     'react/jsx-uses-react': 1, //防止反应被错误地标记为未使用
//     'react/jsx-uses-vars': 2, //防止在JSX中使用的变量被错误地标记为未使用
//     'react/no-danger': 0, //防止使用危险的JSX属性
//     'react/no-did-mount-set-state': 0, //防止在componentDidMount中使用setState
//     'react/no-did-update-set-state': 1, //防止在componentDidUpdate中使用setState
//     'react/no-direct-mutation-state': 2, //防止this.state的直接变异
//     'react/no-multi-comp': 2, //防止每个文件有多个组件定义
//     'react/no-set-state': 0, //防止使用setState
//     'react/no-unknown-property': 2, //防止使用未知的DOM属性
//     'react/prefer-es6-class': 2, //为React组件强制执行ES5或ES6类
//     'react/prop-types': 0, //防止在React组件定义中丢失props验证
//     'react/react-in-jsx-scope': 2, //使用JSX时防止丢失React
//     'react/self-closing-comp': 0, //防止没有children的组件的额外结束标签
//     'react/sort-comp': 2, //强制组件方法顺序
//     'no-extra-boolean-cast': 0, //禁止不必要的bool转换
//     'react/no-array-index-key': 0, //防止在数组中遍历中使用数组key做索引
//     'react/no-deprecated': 1, //不使用弃用的方法
//     'react/jsx-equals-spacing': 2, //在JSX属性中强制或禁止等号周围的空格
//     'no-unreachable': 1, //不能有无法执行的代码
//     'comma-dangle': 2, //对象字面量项尾不能有逗号
//     'no-mixed-spaces-and-tabs': 0, //禁止混用tab和空格
//     'prefer-arrow-callback': 0, //比较喜欢箭头回调
//     'arrow-parens': 0, //箭头函数用小括号括起来
//     'arrow-spacing': 0, //=>的前/后括号
//   },
//   settings: {
//     'import/ignore': ['node_modules'],
//     'import/resolver': {
//       // 识别 webpack 配置的路径别名
//       webpack: {
//         config: 'webpack.config.js',
//       },
//     },
//     react: {
//       // 告知浏览器版本
//       vsersion: '999.999.999',
//     },
//   },
// };
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Babel: true,
    React: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // 关闭换行符操作系统格式问题
    'linebreak-style': ['off', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 禁止缩进错误
    indent: 0,
    // 关闭不允许使用 no-tabs
    'no-tabs': 'off',
    'no-console': 1,
    // 设置不冲突 underscore 库
    'no-underscore-dangle': 0,
    // 箭头函数直接返回的时候不需要 大括号 {}
    'arrow-body-style': [2, 'as-needed'],
    'no-alert': 'error',

    // 设置是否可以重新改变参数的值
    'no-param-reassign': 0,
    // 允许使用 for in
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    // 不需要每次都有返回
    'consistent-return': 0,
    // 允许使用 arguments
    'prefer-rest-params': 0,
    // 允许返回 await
    'no-return-await': 0,
    // 不必在使用前定义 函数
    'no-use-before-define': 0,
    // 允许代码后面空白
    'no-trailing-spaces': 0,
    // 不允许使用未定义的变量
    'no-undef': 2,
    // 不允许匿名函数
    'func-names': 'as-needed',

    // 关闭大括号内的换行符要求
    'object-curly-newline': 0,

    // 有一些 event 的时候，不需要 role 属性，不需要其他解释
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    // 类成员之间空行问题
    'lines-between-class-members': 0,

    // 不区分是否在 despendencies
    'import/no-extraneous-dependencies': 0,
    // 引用时候根据根目录基础
    'import/no-unresolved': 0,
    // 引用时优先采用默认输出
    'import/prefer-default-export': 0,

    // 关闭解构赋值报错
    'react/destructuring-assignment': 0,
    // 允许在 .js 和 .jsx 文件中使用  jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // jsx > 紧跟着属性
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    // 不区分是否是 无状态组件
    'react/prefer-stateless-function': 0,
    // prop-types忽略children属性
    'react/prop-types': 0,
    // 关闭禁止prop-types类型
    'react/forbid-prop-types': 0,
    // 关闭default-props检查
    'react/require-default-props': 0,
    // 一行显示的字符数
    'react/jsx-one-expression-per-line': 0,
    // 按需传递props值
    'react/jsx-props-no-spreading': 0,
  },
};
