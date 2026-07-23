import type { NewsArticle } from './types';

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'giai-phap-khi-nen-cho-nha-may-cong-nghiep',
    title: {
      vi: 'Giải Pháp Khí Nén Tối Ưu Cho Nhà Máy Công Nghiệp',
      en: 'Optimal Compressed Air Solutions for Industrial Factories',
      zh: '工业厂房气源选型方案深度解析'
    },
    summary: {
      vi: 'Khám phá cách lựa chọn máy nén khí phù hợp giúp tăng 30% hiệu suất vận hành và giảm tiêu thụ điện năng hiệu quả.',
      en: 'Discover how choosing the right air compressor can increase operational efficiency by 30% and reduce power consumption.',
      zh: '选对空压机，运行效率提升30%、电费显著下降——实操选型思路分享。'
    },
    content: {
      vi: `
Trong ngành gia công cơ khí và chế tạo, nhà máy đòi hỏi nguồn khí nén không chỉ mạnh mẽ mà còn phải đạt độ tinh khiết cao. Bài viết này sẽ phân tích chi tiết:
1. **Áp suất lý tưởng:** Tại sao áp suất ổn định lại là tiêu chuẩn vàng cho hệ thống nhà xưởng.
2. **Xử lý khí:** Vai trò của máy sấy lạnh và bộ lọc 4 cấp trong việc bảo vệ máy móc thiết bị.
3. **Tiết kiệm năng lượng:** Công nghệ biến tần từ tính vĩnh cửu giúp giảm đến 40% điện năng tiêu thụ.

Đầu tư vào một hệ thống khí nén chuyên dụng không phải là chi phí, mà là khoản đầu tư sinh lời thông qua việc bảo vệ thiết bị và tối ưu chi phí vận hành.
      `,
      en: `
In the manufacturing industry, factories require not only powerful but also highly pure compressed air. This article analyzes in detail:
1. **Ideal Pressure:** Why stable pressure is the gold standard for factory operations.
2. **Air Treatment:** The role of refrigerated dryers and 4-stage filters in protecting industrial machinery.
3. **Energy Savings:** Permanent magnet variable frequency technology helps reduce energy consumption by up to 40%.

Investing in a specialized compressed air system is not a cost, but a profitable investment by protecting equipment and optimizing operational costs.
      `,
      zh: `
在工业制造领域，工厂对压缩空气的要求极为严苛——不仅要压力充足，更要洁净度达标。本文从实际应用出发，为您深度解析：
1. **气源压力选型：** 为什么稳定的供气压力是工业生产的黄金参数？
2. **后处理配套：** 冷干机 + 四级精密过滤如何有效保护生产设备，延长机械寿命？
3. **能耗优化：** 永磁变频技术实测可降低能耗高达 40%，投资回报期大幅缩短。

配置一套专业的气源系统，表面看是投入，实际上是在保护生产设备、降低长期运营成本——这笔账，算得过来。
      `
    },
    category: {
      vi: 'Giải pháp Công nghệ',
      en: 'Technology Solutions',
      zh: '技术干货'
    },
    categorySlug: 'tech-solutions',
    author: 'KINKONAC Tech Team',
    date: '2023-11-15',
    views: 1250,
    readTime: 5
  },
  {
    id: 'news-2',
    slug: 'huong-dan-bao-tri-may-nen-khi-dinh-ky',
    title: {
      vi: 'Hướng Dẫn Bảo Trì Máy Nén Khí Định Kỳ Dành Cho Nhà Máy',
      en: 'Periodic Maintenance Guide for Factory Air Compressors',
      zh: '工厂空压机定期保养实操手册'
    },
    summary: {
      vi: 'Quy trình bảo dưỡng chuẩn 5 bước giúp kéo dài tuổi thọ máy nén khí trục vít và hạn chế tối đa thời gian downtime.',
      en: 'A standard 5-step maintenance process that helps extend the lifespan of screw air compressors and minimizes downtime.',
      zh: '5步标准保养流程，有效延长螺杆空压机使用寿命、大幅减少非计划停机。'
    },
    content: {
      vi: `
Bảo trì định kỳ là chìa khóa để giữ cho hệ thống khí nén hoạt động ổn định. Dưới đây là 5 bước cơ bản:
1. Kiểm tra và thay thế dầu máy nén định kỳ (mỗi 2000 - 4000 giờ tùy loại).
2. Vệ sinh hoặc thay thế lọc gió, lọc dầu và bộ tách dầu.
3. Kiểm tra độ căng của dây đai (đối với máy dẫn động bằng dây đai).
4. Làm sạch giàn tản nhiệt để đảm bảo hiệu suất làm mát.
5. Kiểm tra các van an toàn và hệ thống điều khiển.

Thực hiện đúng quy trình này sẽ giúp doanh nghiệp của bạn tiết kiệm hàng ngàn đô la chi phí sửa chữa đột xuất.
      `,
      en: `
Routine maintenance is key to keeping your compressed air system running smoothly. Here are 5 basic steps:
1. Check and replace compressor oil periodically (every 2000 - 4000 hours depending on type).
2. Clean or replace air filters, oil filters, and oil separators.
3. Check belt tension (for belt-driven machines).
4. Clean the radiator fins to ensure cooling performance.
5. Inspect safety valves and control systems.

Following this procedure will save your business thousands of dollars in unexpected repair costs.
      `,
      zh: `
定期保养是气源系统稳定运行的基础。以下5个核心步骤，建议纳入您的设备管理规程：
1. 按规定周期更换空压机专用油（一般每 2000 - 4000 小时，视机型而定）。
2. 定期清洗或更换空滤、油滤及油气分离器芯。
3. 皮带驱动机型需检查皮带张紧度，避免打滑磨损。
4. 清理散热翅片积灰，确保冷却系统高效散热。
5. 逐项检查安全阀与控制系统，排除潜在隐患。

坚持执行以上流程，可有效避免突发故障带来的高额维修成本和产线停摆损失。
      `
    },
    category: {
      vi: 'Hướng dẫn sử dụng',
      en: 'User Guides',
      zh: '维保指南'
    },
    categorySlug: 'user-guides',
    author: 'KINKONAC Support',
    date: '2023-12-05',
    views: 890,
    readTime: 4
  },
  {
    id: 'news-3',
    slug: 'kinkonac-ra-mat-dong-may-nen-khi-4-in-1',
    title: {
      vi: 'KINKONAC Ra Mắt Dòng Máy Nén Khí 4-in-1 Mới Nhất 2024',
      en: 'KINKONAC Launches the Latest 4-in-1 Air Compressor Series 2024',
      zh: 'KINKONAC 2024年全新四合一空压机系列正式发布'
    },
    summary: {
      vi: 'Dòng sản phẩm tích hợp Máy nén, Bình tích, Máy sấy và Bộ lọc trong cùng một thiết kế nhỏ gọn, tối ưu không gian nhà xưởng.',
      en: 'An integrated product line combining Compressor, Tank, Dryer, and Filters in a compact design, optimizing workshop space.',
      zh: '压缩机+储气罐+冷干机+精密过滤器四合一集成设计，占地面积大幅缩减，即装即用。'
    },
    content: {
      vi: `
Nhằm đáp ứng nhu cầu ngày càng cao của các xưởng gia công quy mô vừa và nhỏ, KINKONAC chính thức giới thiệu dòng máy **All-in-One 4-in-1**.

**Điểm nổi bật:**
- **Tiết kiệm không gian:** Diện tích lắp đặt giảm 50% so với hệ thống rời.
- **Lắp đặt nhanh chóng:** Dễ dàng "Cắm và Chạy" (Plug & Play) không cần đường ống kết nối phức tạp.
- **Chất lượng khí cao:** Đạt tiêu chuẩn khí sạch cấp độ công nghiệp nhờ bộ lọc tích hợp hiệu suất cao.

Sản phẩm này dự kiến sẽ là "Game Changer" trong năm 2024 cho các nhà xưởng sản xuất và gia công cơ khí.
      `,
      en: `
To meet the growing needs of small and medium-sized machining workshops, KINKONAC officially introduces the **All-in-One 4-in-1** series.

**Highlights:**
- **Space-saving:** Installation footprint is reduced by 50% compared to separated systems.
- **Quick installation:** Easy "Plug & Play" without complex piping connections.
- **High air quality:** Achieves industrial-grade clean air standards thanks to high-performance integrated filters.

This product is expected to be a "Game Changer" in 2024 for manufacturing workshop customers.
      `,
      zh: `
针对中小型加工车间对气源设备"占地小、上手快、气质好"的迫切需求，KINKONAC 正式推出 **All-in-One 四合一** 系列。

**核心亮点：**
- **占地减半：** 相比传统分体式系统，安装面积缩小 50%，为产线腾出更多空间。
- **即装即用：** 无需复杂的管路连接，通电通气即可投入生产。
- **气质达标：** 内置高效精密过滤模块，出气品质直接满足工业级洁净标准。

这款产品将为 2024 年的制造业用户带来全新的气源配置体验——更省心、更高效、更经济。
      `
    },
    category: {
      vi: 'Tin Tức Sản Phẩm',
      en: 'Product News',
      zh: '新品发布'
    },
    categorySlug: 'product-news',
    author: 'KINKONAC PR',
    date: '2024-01-10',
    views: 2100,
    readTime: 3
  },
  {
    id: 'news-4',
    slug: 'chon-mua-may-say-khi',
    title: {
      vi: 'Cách Chọn Mua Máy Sấy Khí Phù Hợp Cho Hệ Thống Khí Nén',
      en: 'How to Choose the Right Air Dryer for Your Compressed Air System',
      zh: '冷干机选型攻略：如何为您的气源系统匹配最合适的干燥设备'
    },
    summary: {
      vi: 'Phân biệt máy sấy lạnh và máy sấy hấp thụ. Lựa chọn nào mang lại hiệu quả kinh tế cao nhất cho doanh nghiệp của bạn?',
      en: 'Distinguish between refrigerated dryers and desiccant dryers. Which choice brings the highest economic efficiency to your business?',
      zh: '冷冻式 vs 吸附式干燥机，哪种方案性价比更高？一文帮您理清选型思路。'
    },
    content: {
      vi: `
Trong phần lớn các ứng dụng công nghiệp, việc loại bỏ hơi nước khỏi khí nén là bắt buộc. Có hai công nghệ sấy chính:

**1. Máy sấy lạnh (Refrigerated Dryer):**
- Làm lạnh không khí xuống khoảng 3°C để hơi nước ngưng tụ.
- Chi phí đầu tư thấp, dễ bảo trì.
- Phù hợp cho 90% ứng dụng công nghiệp thông thường.

**2. Máy sấy hấp thụ (Desiccant Dryer):**
- Sử dụng hạt hút ẩm, có thể đạt điểm sương tới -40°C hoặc thấp hơn.
- Chi phí cao, hao hụt lượng khí nén nhất định để tái sinh hạt.
- Dành cho môi trường yêu cầu khí siêu khô (y tế, điện tử, gia công chính xác).

Đối với các xưởng gia công thông thường, máy sấy lạnh chuyên dụng từ KINKONAC là lựa chọn tối ưu về chi phí và hiệu quả.
      `,
      en: `
In most industrial applications, removing water vapor from compressed air is mandatory. There are two main drying technologies:

**1. Refrigerated Dryer:**
- Cools the air to about 3°C to condense water vapor.
- Low investment cost, easy to maintain.
- Suitable for 90% of general industrial applications.

**2. Desiccant Dryer:**
- Uses desiccant beads, can achieve dew points down to -40°C or lower.
- High cost, consumes some compressed air for regeneration.
- For environments requiring ultra-dry air (medical, electronics, precision manufacturing).

For standard manufacturing workshops, a specialized refrigerated dryer from KINKONAC is the optimal choice for cost and efficiency.
      `,
      zh: `
在绝大多数工业场景中，压缩空气中的水分必须彻底去除，否则将直接影响生产质量和设备寿命。目前主流的两种干燥技术各有适用场景：

**1. 冷冻式干燥机（冷干机）：**
- 将压缩空气冷却至约 3°C，使水蒸气凝结排出。
- 设备投入低、日常维护简单，综合使用成本可控。
- 能满足约 90% 常规工业工况的除水需求。

**2. 吸附式干燥机（吸干机）：**
- 采用吸附剂深度除水，出口露点可低至 -40°C 甚至更低。
- 设备及运行成本较高，且再生过程会消耗一部分压缩空气。
- 适用于对空气洁净度要求极高的特殊工况（医疗、精密电子、高精度加工等）。

如果您的主要应用是常规工业加工，KINKONAC 专用冷干机是兼顾品质与成本的理想选择。
      `
    },
    category: {
      vi: 'Kiến Thức Ngành',
      en: 'Industry Knowledge',
      zh: '选型指南'
    },
    categorySlug: 'industry-knowledge',
    author: 'KINKONAC Experts',
    date: '2024-02-20',
    views: 1100,
    readTime: 6
  },
  {
    id: 'news-5',
    slug: 'trien-lam-quoc-te-ve-thiet-bi-cong-nghiep-2024',
    title: {
      vi: 'KINKONAC Tham Gia Triển Lãm Quốc Tế Về Thiết Bị Công Nghiệp 2024',
      en: 'KINKONAC Participates in the 2024 International Industrial Equipment Exhibition',
      zh: 'KINKONAC 亮相 2024 国际工业技术装备展'
    },
    summary: {
      vi: 'Cập nhật những hình ảnh và công nghệ khí nén đột phá mà KINKONAC đã trình diễn tại triển lãm công nghiệp quốc tế vừa qua.',
      en: 'Update on the images and breakthrough compressed air technologies that KINKONAC demonstrated at the recent international industrial exhibition.',
      zh: '直击展会现场：KINKONAC 携旗下高压气源系统精彩亮相，获行业专家高度认可。'
    },
    content: {
      vi: `
Tại triển lãm Quốc tế về Công nghệ và Thiết bị gia công kim loại diễn ra vào tháng 3/2024, gian hàng của KINKONAC đã thu hút hơn 5000 lượt khách tham quan.

Chúng tôi đã trình diễn trực tiếp hệ thống máy nén khí áp suất cao (1.6 Mpa) phục vụ cho nhà máy chế tạo. Khả năng cung cấp luồng khí ổn định, không ngậm nước, ngậm dầu của máy đã nhận được sự đánh giá rất cao từ các chuyên gia trong ngành.

Đây là minh chứng cho cam kết không ngừng nâng cao chất lượng sản phẩm của KINKONAC nhằm hỗ trợ tốt nhất cho các doanh nghiệp sản xuất tại Việt Nam.
      `,
      en: `
At the International Exhibition on Metalworking Technology and Equipment held in March 2024, the KINKONAC booth attracted more than 5,000 visitors.

We live-demonstrated a high-pressure air compressor system (1.6 Mpa) serving manufacturing plants. The ability to provide a stable, water-free, and oil-free airflow received high praise from industry experts.

This is a testament to KINKONAC's commitment to continuously improving product quality to best support manufacturing businesses in Vietnam.
      `,
      zh: `
2024年3月，在国际金属加工技术装备展览会上，KINKONAC 展位累计接待超过 5000 名专业观众。

展会现场，我们实机演示了为工业制造配套的 1.6 MPa 高压气源系统。设备出气稳定、无水无油的卓越表现，获得了众多行业专家和终端用户的一致好评。

这也再次印证了 KINKONAC 始终坚持的产品理念：以过硬品质服务制造业客户，做工业领域最值得信赖的气源合作伙伴。
      `
    },
    category: {
      vi: 'Sự Kiện',
      en: 'Events',
      zh: '展会动态'
    },
    categorySlug: 'events',
    author: 'KINKONAC PR',
    date: '2024-03-25',
    views: 3400,
    readTime: 2
  }
];
