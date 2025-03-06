const fs = require('fs');
const path = require('path');

// 读取README.md文件
const readmePath = path.join(__dirname, '../README.md');
const readmeContent = fs.readFileSync(readmePath, 'utf8');

// 组件结构定义
const componentStructure = {
  baseComponents: {
    path: '../components/BaseComponents',
    categories: {
      'General': [],
      'Layout': [],
      'Form': [],
      'Data Display': [],
      'Navigation': []
    }
  },
  businessComponents: {
    path: '../components/BusinessComponents',
    categories: {
      'Product': [],
      'Cart': [],
      'Order': [],
      'Checkout & Payment': [],
      'User Center': [],
      'Review & Social': [],
      'Promotion & Marketing': [],
      'Search & Recommendation': [],
      'Shipping & Tracking': [],
      'Other Features': []
    }
  }
};

// 页面结构定义
const pageStructure = {
  path: '../pages',
  categories: {
    'Home': [],
    'Product': [],
    'Cart & Checkout': [],
    'Order': [],
    'User Center': [],
    'Shipping & Tracking': [],
    'Payment': [],
    'Promotion & Marketing': [],
    'Customer Service & Help Center': [],
    'Other': []
  }
};

// 解析README.md文件，提取组件和页面信息
function parseReadme(content) {
  // 解析基础组件
  parseComponents(content, '## **1. 基础组件', componentStructure.baseComponents);
  
  // 解析业务组件
  parseComponents(content, '## **2. 业务组件', componentStructure.businessComponents);
  
  // 解析页面
  parsePages(content, '### 商城页面目录', pageStructure);
}

// 解析组件部分
function parseComponents(content, sectionStart, structure) {
  const sectionRegex = new RegExp(`${sectionStart}[\\s\\S]*?---`, 'g');
  const section = content.match(sectionRegex);
  
  if (!section || section.length === 0) return;
  
  const categoryRegex = /### \*\*[\d\.]+\s+(.*?)\*\*/g;
  let categoryMatch;
  
  while ((categoryMatch = categoryRegex.exec(section[0])) !== null) {
    const categoryName = categoryMatch[1].replace(/（.*?）/g, '').trim();
    
    if (structure.categories[categoryName]) {
      const componentRegex = new RegExp(`### \\*\\*[\\d\\.]+\\s+${categoryName}.*?\\*\\*([\\s\\S]*?)(?=### \\*\\*|---)`, 'g');
      const componentSection = componentRegex.exec(section[0]);
      
      if (componentSection && componentSection[1]) {
        const componentLines = componentSection[1].split('\n');
        
        componentLines.forEach(line => {
          const componentMatch = line.match(/- `([^`]+)`\s+(.*?)(?:\s+✅)?$/);
          if (componentMatch) {
            const componentName = componentMatch[1];
            const componentDesc = componentMatch[2];
            const isCompleted = line.includes('✅');
            
            structure.categories[categoryName].push({
              name: componentName,
              description: componentDesc,
              completed: isCompleted
            });
          }
        });
      }
    }
  }
}

// 解析页面部分
function parsePages(content, sectionStart, structure) {
  const sectionRegex = new RegExp(`${sectionStart}[\\s\\S]*$`, 'g');
  const section = content.match(sectionRegex);
  
  if (!section || section.length === 0) return;
  
  const categoryRegex = /## \*\*[^*]+\*\*/g;
  let lastIndex = 0;
  let categoryMatch;
  
  while ((categoryMatch = categoryRegex.exec(section[0])) !== null) {
    const categoryText = categoryMatch[0];
    const categoryName = categoryText.match(/## \*\*[^*]*?(\d️⃣\s+)?([^*]+)\*\*/)[2].trim();
    
    if (structure.categories[categoryName]) {
      const nextCategoryMatch = categoryRegex.exec(section[0]);
      let categoryContent;
      
      if (nextCategoryMatch) {
        categoryContent = section[0].substring(lastIndex + categoryText.length, nextCategoryMatch.index);
        categoryRegex.lastIndex = nextCategoryMatch.index; // 重置正则表达式的lastIndex
      } else {
        categoryContent = section[0].substring(lastIndex + categoryText.length);
      }
      
      const pageRegex = /- `([^`]+)`\s+\*\*([^*]+)\*\*/g;
      let pageMatch;
      
      while ((pageMatch = pageRegex.exec(categoryContent)) !== null) {
        const pagePath = pageMatch[1];
        const pageTitle = pageMatch[2];
        
        structure.categories[categoryName].push({
          path: pagePath,
          title: pageTitle
        });
      }
      
      lastIndex = categoryRegex.lastIndex;
    }
  }
}

// 创建目录和文件
function createDirectories() {
  // 创建基础组件目录
  Object.keys(componentStructure.baseComponents.categories).forEach(category => {
    const components = componentStructure.baseComponents.categories[category];
    const categoryPath = path.join(__dirname, componentStructure.baseComponents.path, category);
    
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
      console.log(`创建目录: ${categoryPath}`);
    } else {
      console.log(`目录已存在，跳过创建: ${categoryPath}`);
    }
    
    components.forEach(component => {
      const componentPath = path.join(categoryPath, component.name);
      if (!fs.existsSync(componentPath)) {
        fs.mkdirSync(componentPath, { recursive: true });
        console.log(`创建组件目录: ${componentPath}`);
        
        // 创建基本文件
        const htmlPath = path.join(componentPath, 'index.html');
        const cssPath = path.join(componentPath, 'css.css');
        
        if (!fs.existsSync(htmlPath)) {
          fs.writeFileSync(htmlPath, generateHtmlTemplate(component.name));
          console.log(`创建文件: ${htmlPath}`);
        } else {
          console.log(`文件已存在，跳过创建: ${htmlPath}`);
        }
        
        if (!fs.existsSync(cssPath)) {
          fs.writeFileSync(cssPath, generateCssTemplate(component.name));
          console.log(`创建文件: ${cssPath}`);
        } else {
          console.log(`文件已存在，跳过创建: ${cssPath}`);
        }
      } else {
        console.log(`组件目录已存在，跳过创建: ${componentPath}`);
      }
    });
  });
  
  // 创建业务组件目录
  Object.keys(componentStructure.businessComponents.categories).forEach(category => {
    const components = componentStructure.businessComponents.categories[category];
    const categoryPath = path.join(__dirname, componentStructure.businessComponents.path, category);
    
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
      console.log(`创建目录: ${categoryPath}`);
    } else {
      console.log(`目录已存在，跳过创建: ${categoryPath}`);
    }
    
    components.forEach(component => {
      const componentPath = path.join(categoryPath, component.name);
      if (!fs.existsSync(componentPath)) {
        fs.mkdirSync(componentPath, { recursive: true });
        console.log(`创建组件目录: ${componentPath}`);
        
        // 创建基本文件
        const htmlPath = path.join(componentPath, 'index.html');
        const cssPath = path.join(componentPath, 'css.css');
        
        if (!fs.existsSync(htmlPath)) {
          fs.writeFileSync(htmlPath, generateHtmlTemplate(component.name));
          console.log(`创建文件: ${htmlPath}`);
        } else {
          console.log(`文件已存在，跳过创建: ${htmlPath}`);
        }
        
        if (!fs.existsSync(cssPath)) {
          fs.writeFileSync(cssPath, generateCssTemplate(component.name));
          console.log(`创建文件: ${cssPath}`);
        } else {
          console.log(`文件已存在，跳过创建: ${cssPath}`);
        }
      } else {
        console.log(`组件目录已存在，跳过创建: ${componentPath}`);
      }
    });
  });
  
  // 创建页面目录
  Object.keys(pageStructure.categories).forEach(category => {
    const pages = pageStructure.categories[category];
    const categoryPath = path.join(__dirname, pageStructure.path, category.replace(/\s+/g, '-').toLowerCase());
    
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
      console.log(`创建目录: ${categoryPath}`);
    } else {
      console.log(`目录已存在，跳过创建: ${categoryPath}`);
    }
    
    pages.forEach(page => {
      // 处理动态路由
      const pageName = page.path.replace(/[:]/g, '_').replace(/[\/]/g, '-').substring(1);
      const pagePath = path.join(categoryPath, pageName);
      
      if (!fs.existsSync(pagePath)) {
        fs.mkdirSync(pagePath, { recursive: true });
        console.log(`创建页面目录: ${pagePath}`);
        
        // 创建基本文件
        const htmlPath = path.join(pagePath, 'index.html');
        const cssPath = path.join(pagePath, 'style.css');
        
        if (!fs.existsSync(htmlPath)) {
          fs.writeFileSync(htmlPath, generatePageTemplate(page.title));
          console.log(`创建文件: ${htmlPath}`);
        } else {
          console.log(`文件已存在，跳过创建: ${htmlPath}`);
        }
        
        if (!fs.existsSync(cssPath)) {
          fs.writeFileSync(cssPath, generatePageCssTemplate());
          console.log(`创建文件: ${cssPath}`);
        } else {
          console.log(`文件已存在，跳过创建: ${cssPath}`);
        }
      } else {
        console.log(`页面目录已存在，跳过创建: ${pagePath}`);
      }
    });
  });
}

// 生成HTML模板
function generateHtmlTemplate(componentName) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${componentName} Component</title>
    <link rel="stylesheet" href="./css.css" />
  </head>
  <body>
    <div class="auv ${componentName.toLowerCase().replace(/[^a-z0-9]/g, '-')}">
      <!-- ${componentName} component content goes here -->
    </div>
  </body>
</html>
`;
}

// 生成CSS模板
function generateCssTemplate(componentName) {
  const cssClassName = componentName.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return `@import url("../../../../public/css/public.css");

/* ${componentName} 组件样式 */
.auv.${cssClassName} {
  /* 基础样式 */
}
`;
}

// 生成页面HTML模板
function generatePageTemplate(pageTitle) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="page-container">
      <header>
        <h1>${pageTitle}</h1>
      </header>
      <main>
        <!-- 页面内容 -->
      </main>
      <footer>
        <!-- 页脚内容 -->
      </footer>
    </div>
  </body>
</html>
`;
}

// 生成页面CSS模板
function generatePageCssTemplate() {
  return `@import url("../../../public/css/public.css");

/* 页面样式 */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  margin-bottom: 20px;
}

main {
  min-height: 500px;
}

footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
`;
}

// 生成目录结构JSON文件
function generateStructureJson() {
  const structure = {
    components: {
      base: componentStructure.baseComponents.categories,
      business: componentStructure.businessComponents.categories
    },
    pages: pageStructure.categories
  };
  
  const jsonPath = path.join(__dirname, '../directory-structure.json');
  
  if (!fs.existsSync(jsonPath)) {
    fs.writeFileSync(jsonPath, JSON.stringify(structure, null, 2));
    console.log(`创建文件: ${jsonPath}`);
  } else {
    console.log(`文件已存在，跳过创建: ${jsonPath}`);
  }
}

// 主函数
function main() {
  // 确保scripts目录存在
  const scriptsDir = path.join(__dirname, '../scripts');
  if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir, { recursive: true });
    console.log(`创建目录: ${scriptsDir}`);
  } else {
    console.log(`目录已存在，跳过创建: ${scriptsDir}`);
  }
  
  // 确保components目录存在
  const componentsDir = path.join(__dirname, '../components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
    console.log(`创建目录: ${componentsDir}`);
  } else {
    console.log(`目录已存在，跳过创建: ${componentsDir}`);
  }
  
  // 确保pages目录存在
  const pagesDir = path.join(__dirname, '../pages');
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
    console.log(`创建目录: ${pagesDir}`);
  } else {
    console.log(`目录已存在，跳过创建: ${pagesDir}`);
  }
  
  // 确保public目录存在
  if (!fs.existsSync(path.join(__dirname, '../public/css'))) {
    fs.mkdirSync(path.join(__dirname, '../public/css'), { recursive: true });
    
    // 创建公共CSS文件
    fs.writeFileSync(
      path.join(__dirname, '../public/css/public.css'),
      `/* 公共样式 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;
  --light-color: #f8f9fa;
  --dark-color: #343a40;
  
  --font-family: 'Helvetica Neue', Arial, sans-serif;
  --font-size-sm: 12px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 20px;
  
  --border-radius-sm: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;
  
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}

/* 通用样式 */
.auv {
  box-sizing: border-box;
  font-family: var(--font-family);
}
`
    );
  }
  
  // 解析README
  parseReadme(readmeContent);
  
  // 创建目录和文件
  createDirectories();
  
  // 生成目录结构JSON
  generateStructureJson();
  
  console.log('目录结构生成完成！');
}

main();