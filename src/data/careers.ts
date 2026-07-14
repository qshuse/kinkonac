import type { Job } from './types';

export const jobListings: Job[] = [
  {
    id: 'job-1',
    slug: 'chuyen-vien-kinh-doanh',
    title: {
      vi: 'Chuyên Viên Kinh Doanh B2B',
      en: 'B2B Sales Executive',
      zh: 'B2B销售专员'
    },
    department: {
      vi: 'Phòng Kinh Doanh',
      en: 'Sales Department',
      zh: '销售部'
    },
    location: {
      vi: 'Bình Dương, Việt Nam',
      en: 'Binh Duong, Vietnam',
      zh: '越南平阳'
    },
    type: {
      vi: 'Toàn thời gian',
      en: 'Full-time',
      zh: '全职'
    },
    salary: {
      vi: '15.000.000 - 30.000.000 VNĐ',
      en: '$600 - $1200',
      zh: '15,000,000 - 30,000,000 越南盾'
    },
    description: {
      vi: 'Tìm kiếm và phát triển mạng lưới khách hàng doanh nghiệp trong ngành cơ khí, gia công laser. Tư vấn các giải pháp máy nén khí phù hợp với nhu cầu của khách hàng.',
      en: 'Search and develop a network of corporate clients in the mechanical and laser processing industry. Advise on air compressor solutions suitable for customer needs.',
      zh: '在机械和激光加工行业寻找和开发企业客户网络。提供适合客户需求的空压机解决方案咨询。'
    },
    requirements: {
      vi: [
        'Tốt nghiệp Cao đẳng/Đại học chuyên ngành Quản trị Kinh doanh, Cơ khí, Điện hoặc liên quan.',
        'Có ít nhất 1 năm kinh nghiệm sales B2B, ưu tiên ngành máy móc công nghiệp.',
        'Kỹ năng giao tiếp, đàm phán và thuyết phục tốt.',
        'Sẵn sàng đi công tác khi có yêu cầu.'
      ],
      en: [
        'Graduated from College/University majoring in Business Administration, Mechanics, Electricity or related.',
        'At least 1 year of B2B sales experience, preferred in industrial machinery.',
        'Good communication, negotiation and persuasion skills.',
        'Willing to travel on business trips when required.'
      ],
      zh: [
        '大专/本科毕业，工商管理、机械、电气或相关专业。',
        '至少1年B2B销售经验，有工业机械行业经验者优先。',
        '良好的沟通、谈判和说服能力。',
        '愿意根据要求出差。'
      ]
    },
    benefits: {
      vi: [
        'Lương cứng + Hoa hồng hấp dẫn (Không giới hạn).',
        'Thưởng Lễ, Tết, lương tháng 13.',
        'Được đào tạo chuyên sâu về kỹ thuật sản phẩm và kỹ năng sales.',
        'Môi trường làm việc trẻ trung, năng động, có cơ hội thăng tiến.',
        'Đóng BHXH, BHYT đầy đủ theo quy định của pháp luật.'
      ],
      en: [
        'Base salary + Attractive commission (Unlimited).',
        'Holiday bonuses, 13th month salary.',
        'In-depth training on product techniques and sales skills.',
        'Young, dynamic working environment with promotion opportunities.',
        'Full social insurance and health insurance according to the law.'
      ],
      zh: [
        '底薪 + 丰厚提成（上不封顶）。',
        '节假日奖金、第13个月工资。',
        '深入的产品技术和销售技巧培训。',
        '年轻充满活力的工作环境，有晋升机会。',
        '按法律规定缴纳社会保险和医疗保险。'
      ]
    },
    datePosted: '2024-05-15'
  },
  {
    id: 'job-2',
    slug: 'ky-thuat-vien-bao-tri',
    title: {
      vi: 'Kỹ Thuật Viên Bảo Trì Máy Nén Khí',
      en: 'Air Compressor Maintenance Technician',
      zh: '空压机维修技术员'
    },
    department: {
      vi: 'Phòng Kỹ Thuật',
      en: 'Technical Department',
      zh: '技术部'
    },
    location: {
      vi: 'Bình Dương, Việt Nam',
      en: 'Binh Duong, Vietnam',
      zh: '越南平阳'
    },
    type: {
      vi: 'Toàn thời gian',
      en: 'Full-time',
      zh: '全职'
    },
    salary: {
      vi: '12.000.000 - 20.000.000 VNĐ',
      en: '$500 - $800',
      zh: '12,000,000 - 20,000,000 越南盾'
    },
    description: {
      vi: 'Thực hiện lắp đặt, bảo hành, bảo trì, và sửa chữa hệ thống máy nén khí tại nhà máy của khách hàng. Hỗ trợ giải đáp các thắc mắc kỹ thuật cho khách hàng.',
      en: 'Perform installation, warranty, maintenance, and repair of air compressor systems at customers factories. Support in answering technical queries for customers.',
      zh: '在客户工厂执行空压机系统的安装、保修、维护和维修。支持解答客户的技术问题。'
    },
    requirements: {
      vi: [
        'Tốt nghiệp Trung cấp/Cao đẳng chuyên ngành Cơ điện tử, Điện công nghiệp, hoặc Cơ khí.',
        'Có kinh nghiệm bảo trì hệ thống khí nén là một lợi thế.',
        'Đọc hiểu tài liệu kỹ thuật cơ bản.',
        'Có sức khỏe tốt, trung thực, cẩn thận và có trách nhiệm với công việc.'
      ],
      en: [
        'Graduated from Intermediate/College majoring in Mechatronics, Industrial Electricity, or Mechanics.',
        'Experience in maintaining compressed air systems is an advantage.',
        'Ability to read and understand basic technical documents.',
        'Good health, honest, careful and responsible at work.'
      ],
      zh: [
        '中专/大专毕业，机电一体化、工业电气或机械专业。',
        '有空压机系统维护经验者优先。',
        '能阅读并理解基本技术文档。',
        '身体健康、诚实、仔细，对工作有责任心。'
      ]
    },
    benefits: {
      vi: [
        'Lương cơ bản + Phụ cấp đi lại, công tác phí.',
        'Thưởng KPIs và hiệu quả công việc.',
        'Được cử đi đào tạo tại nhà máy sản xuất của hãng.',
        'Đóng BHXH, BHYT đầy đủ.'
      ],
      en: [
        'Basic salary + Travel allowance, per diem.',
        'KPIs and performance bonuses.',
        'Sent for training at the manufacturers production plant.',
        'Full social insurance and health insurance.'
      ],
      zh: [
        '基本工资 + 交通补贴、差旅费。',
        'KPI和绩效奖金。',
        '派往制造商生产工厂接受培训。',
        '缴纳社会保险和医疗保险。'
      ]
    },
    datePosted: '2024-05-10'
  }
];
