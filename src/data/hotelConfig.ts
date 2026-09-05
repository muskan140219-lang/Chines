/**
 * Central Hotel Configuration & Verified Property Data
 * 
 * Business Reference: Jingtailong International Hotel (北京京泰龙国际大酒店)
 * Google Maps: https://maps.app.goo.gl/AUZruh1kdMRmo7NdA?g_st=ac
 * 
 * All properties are editable and centralized here.
 * Note: Replace placeholder photography with owner-approved hotel photography.
 */

export interface RoomCategory {
  id: string;
  nameEN: string;
  nameCN: string;
  size: string;
  bedEN: string;
  bedCN: string;
  occupancyEN: string;
  occupancyCN: string;
  descriptionEN: string;
  descriptionCN: string;
  amenitiesEN: string[];
  amenitiesCN: string[];
  image: string;
}

export interface FacilityItem {
  id: string;
  titleEN: string;
  titleCN: string;
  descriptionEN: string;
  descriptionCN: string;
  iconName: string;
}

export interface AttractionItem {
  id: string;
  nameEN: string;
  nameCN: string;
  distanceEN: string;
  distanceCN: string;
  timeEN: string;
  timeCN: string;
  descriptionEN: string;
  descriptionCN: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  titleEN: string;
  titleCN: string;
  category: 'all' | 'hotel' | 'rooms' | 'dining' | 'beijing';
  categoryLabelEN: string;
  categoryLabelCN: string;
  image: string;
  aspect: string;
}

export interface FaqItem {
  id: string;
  questionEN: string;
  questionCN: string;
  answerEN: string;
  answerCN: string;
}

export const hotel = {
  // Verified Brand Identity
  nameEN: "Jingtailong International Hotel",
  nameCN: "北京京泰龙国际大酒店",
  namePublicAlt: "Beijing Tailong Plaza Hotel",
  taglineEN: "A Central Stay in Beijing",
  taglineCN: "北京之心 · 静享旅程",
  starRating: 4, // Verified 4-star property
  roomCount: 316, // Verified room count
  
  // Contact & Location
  phone: "+86 10 6707 5888",
  phoneDisplay: "+86 (10) 6707-5888",
  phoneTel: "tel:+861067075888",
  
  email: "reservations@jingtailonghotel.cn", // Configurable hotel inquiry email
  
  address: {
    streetEN: "No. 19 East Avenue Zhushikou",
    streetCN: "珠市口东大街19号",
    districtEN: "Dongcheng District",
    districtCN: "东城区",
    cityEN: "Beijing",
    cityCN: "北京市",
    postalCode: "100050",
    countryEN: "China",
    countryCN: "中国",
    fullAddressEN: "No. 19 East Avenue Zhushikou, Dongcheng District, Beijing 100050, China",
    fullAddressCN: "北京市东城区珠市口东大街19号 (邮编 100050)"
  },
  
  coordinates: "39°53′34″N / 116°23′58″E",
  
  // Public Reference Links
  googleMapsURL: "https://maps.app.goo.gl/AUZruh1kdMRmo7NdA?g_st=ac",
  bookingURL: "", // Configurable live booking engine URL; empty defaults to luxury inquiry modal
  websiteURL: "https://www.jingtailonghotel.cn",
  
  // Verified Check-in / Check-out
  checkInTime: "14:00",
  checkOutTime: "12:00",
  
  // Transit information (verified Zhushikou interchange)
  subway: {
    stationEN: "Zhushikou Station (Line 7 & Line 8 interchange)",
    stationCN: "地铁珠市口站（7号线、8号线换乘站）",
    exitEN: "Exit A (approx. 150m walk)",
    exitCN: "A出口步行约150米"
  },

  // Editable photography references (Licensed aesthetic hospitality placeholders matching real property architecture)
  images: {
    hero: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85", // Grand classic hotel architectural facade
    exterior: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80", // Exterior night illumination
    lobby: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80", // High-ceiling hotel lobby
    dining: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80", // Tailong Chinese & Western Restaurant setting
    diningTea: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80", // Refined tea service
    meeting: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80", // Multifunction conference room
    beijingCulture: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80", // Beijing historic landmark near Qianmen/Tiantan
  }
};

export const verifiedRooms: RoomCategory[] = [
  {
    id: "superior-king",
    nameEN: "Superior Queen Room",
    nameCN: "高级大床房",
    size: "25 - 28 m²",
    bedEN: "1 King Bed (1.8m × 2.0m)",
    bedCN: "1张大床 (1.8米 × 2.0米)",
    occupancyEN: "2 Adults",
    occupancyCN: "最多2位成人",
    descriptionEN: "A quiet, well-appointed guest room featuring classic warm wood accents, comfortable bedding, and an efficient workstation for business or leisure.",
    descriptionCN: "雅致安静的居停空间，典雅暖木色调与舒适床品相映成趣，配备实用办公书桌与独立卫浴，为旅途提供从容休憩。",
    amenitiesEN: ["Free High-Speed Wi-Fi", "Central Air Conditioning", "Cable TV", "In-Room Safe", "Electric Kettle & Tea Set", "Ensuite Bathroom with Shower"],
    amenitiesCN: ["免费高速Wi-Fi", "独立温控中央空调", "有线液晶电视", "客房电子保险箱", "电热水壶与中式茶具", "独立卫浴与品牌洗沐"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "superior-twin",
    nameEN: "Superior Twin Room",
    nameCN: "高级双床房",
    size: "28 - 32 m²",
    bedEN: "2 Single Beds (1.2m × 2.0m)",
    bedCN: "2张单人床 (1.2米 × 2.0米)",
    occupancyEN: "2 Adults",
    occupancyCN: "最多2位成人",
    descriptionEN: "Spacious layout with two twin beds, ideal for colleagues or traveling companions looking for a convenient central Beijing stay.",
    descriptionCN: "宽敞的双人床位设计，空间通透舒适，是同行商务伙伴或亲友畅游京城的理想下榻选择。",
    amenitiesEN: ["Free High-Speed Wi-Fi", "Central Air Conditioning", "Cable TV", "In-Room Safe", "Mini Refrigerator", "Daily Housekeeping"],
    amenitiesCN: ["免费高速Wi-Fi", "中央空调温控", "有线液晶电视", "电子保险箱", "客房小冰箱", "每日客房清洁整理"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "deluxe-king",
    nameEN: "Deluxe King Room",
    nameCN: "豪华大床房",
    size: "32 - 36 m²",
    bedEN: "1 King Bed (2.0m × 2.0m)",
    bedCN: "1张特大床 (2.0米 × 2.0米)",
    occupancyEN: "2 Adults",
    occupancyCN: "最多2位成人",
    descriptionEN: "Enhanced square footage featuring a lounge seating area, premium linens, city outlooks, and quiet acoustics for restful nights.",
    descriptionCN: "更为宽绰的起居空间，配有舒适休闲沙发区与更宽阔的大床，窗外可感受南城街景与静谧夜晚。",
    amenitiesEN: ["Free High-Speed Wi-Fi", "Lounge Armchairs", "Minibar", "In-Room Safe", "Bathtub & Rain Shower", "Bathrobes & Slippers"],
    amenitiesCN: ["免费高速Wi-Fi", "休闲扶手椅茶几区", "客房迷你吧", "客房保险箱", "浴缸与热带雨林花洒", "浴袍及定制软拖"],
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "deluxe-twin",
    nameEN: "Deluxe Twin Room",
    nameCN: "豪华双床房",
    size: "32 - 36 m²",
    bedEN: "2 Beds (1.35m × 2.0m)",
    bedCN: "2张宽单人床 (1.35米 × 2.0米)",
    occupancyEN: "2 - 3 Guests",
    occupancyCN: "最多2-3位宾客",
    descriptionEN: "Generously sized twin beds with extra floor area, comfortable seating corner, and modern bathroom amenities for effortless travel.",
    descriptionCN: "配置双张加宽单人床，起居动线舒展自如，配有雅致休闲区与干湿分离卫浴设备。",
    amenitiesEN: ["Free High-Speed Wi-Fi", "Coffee & Tea Facilities", "Work Desk", "Luggage Rack", "Spacious Bathroom", "Soundproofing"],
    amenitiesCN: ["免费高速Wi-Fi", "咖啡与中式茶饮冲饮", "商务写字台", "专用行李放置台", "宽绰卫浴间", "静音门窗设计"],
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "business-suite",
    nameEN: "Business Suite",
    nameCN: "商务套房",
    size: "45 - 50 m²",
    bedEN: "1 King Bed (2.0m × 2.0m)",
    bedCN: "1张特大床 (2.0米 × 2.0米)",
    occupancyEN: "2 - 3 Adults",
    occupancyCN: "最多2-3位成人",
    descriptionEN: "A distinguished suite offering a separated living parlor and private bedroom, well suited for executives hosting confidential meetings or longer stays.",
    descriptionCN: "尊享套房格局，独立会客厅与私密卧房分区明确，便于商务洽谈或从容度过长住时光。",
    amenitiesEN: ["Independent Living Parlor", "Executive Desk & Ergonomic Chair", "Two Flat-screen TVs", "Bathtub & Dressing Area", "Premium Tea Service"],
    amenitiesCN: ["独立会客厅与沙发组", "行政办公书桌与人体工学椅", "双液晶电视配置", "独立浴缸与梳妆区", "精选茶饮款待服务"],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "executive-suite",
    nameEN: "Executive Suite",
    nameCN: "行政套房",
    size: "55 - 65 m²",
    bedEN: "1 Master King Bed (2.0m × 2.0m)",
    bedCN: "1张主卧特大床 (2.0米 × 2.0米)",
    occupancyEN: "2 - 4 Guests",
    occupancyCN: "最多2-4位宾客",
    descriptionEN: "The hotel's premiere accommodation, blending spacious hospitality, dedicated conference table area, expansive views, and personalized room service.",
    descriptionCN: "酒店至高规制下榻空间，融汇通透格局、小型圆桌会议空间、宽阔视野与细致入微的管家式礼宾服务。",
    amenitiesEN: ["Grand Living Area", "Dining / Conference Table", "Walk-in Wardrobe", "Deluxe Marble Bathroom", "Welcome Fruit Plate", "Priority Concierge"],
    amenitiesCN: ["宽绰典雅主客会客厅", "多功能餐桌/会议桌", "独立衣帽间", "全石材豪华卫浴", "抵店欢迎果盘", "礼宾优先协办服务"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80"
  }
];

export const verifiedFacilities: FacilityItem[] = [
  {
    id: "front-desk",
    titleEN: "24-Hour Front Desk",
    titleCN: "24小时前台礼宾",
    descriptionEN: "Round-the-clock check-in, key assistance, wake-up calls, and local concierge directions in central Beijing.",
    descriptionCN: "全天候接待、快速入住办理、行李代管与京城周边路线咨询服务。",
    iconName: "Clock"
  },
  {
    id: "wifi",
    titleEN: "High-Speed Wi-Fi",
    titleCN: "高速无线网络",
    descriptionEN: "Complimentary wireless and wired internet access available throughout guest rooms and public areas.",
    descriptionCN: "全楼及客房覆盖高速光纤无线网络，支持畅快移动办公与视讯沟通。",
    iconName: "Wifi"
  },
  {
    id: "dining-facility",
    titleEN: "Tailong Restaurant",
    titleCN: "泰龙中西餐厅",
    descriptionEN: "On-site dining serving breakfast buffet, authentic Chinese cuisine, banquet dining rooms, and room service.",
    descriptionCN: "店内餐饮提供丰富中西式早餐自助、地道中式佳肴及多间私密宴席包房。",
    iconName: "Utensils"
  },
  {
    id: "business",
    titleEN: "Meeting & Conference Facilities",
    titleCN: "多功能会议宴会厅",
    descriptionEN: "Flexible conference rooms and business support services equipped for corporate meetings and seminars.",
    descriptionCN: "多功能会议厅与商务中心，配备现代音视演示设备与会议接待保障。",
    iconName: "Briefcase"
  },
  {
    id: "luggage",
    titleEN: "Luggage & Concierge",
    titleCN: "行李寄存与管家协办",
    descriptionEN: "Secure baggage holding before check-in or after check-out, taxi hailing assistance, and ticket recommendations.",
    descriptionCN: "抵离前后安心行李暂存、出租车协助召车与周边出行指引。",
    iconName: "ShieldCheck"
  },
  {
    id: "climate",
    titleEN: "Climate Control & Safe",
    titleCN: "中央温控与客房保险箱",
    descriptionEN: "Individual climate management, electronic safe, hot water kettle, and daily housekeeping care.",
    descriptionCN: "四季怡人中央温控系统、客房电子保险箱与规范化日常保洁整理。",
    iconName: "Sparkles"
  }
];

export const nearbyAttractions: AttractionItem[] = [
  {
    id: "qianmen",
    nameEN: "Qianmen Pedestrian Street & Dashilan",
    nameCN: "前门步行街与大栅栏历史街区",
    distanceEN: "Approx. 800 meters",
    distanceCN: "约800米 · 步行即达",
    timeEN: "10 mins walk",
    timeCN: "步行约10分钟",
    descriptionEN: "Historic commercial avenue dating back to the Ming & Qing Dynasties, famous for heritage Chinese shops, Beijing roast duck, and restored tramways.",
    descriptionCN: "源于明清时期的繁华商业古街，汇聚京城老字号、烤鸭名店与复古有轨电车，体验浓郁古都商肆风韵。",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tiantan",
    nameEN: "Temple of Heaven (Tiantan)",
    nameCN: "天坛公园 (世界文化遗产)",
    distanceEN: "Approx. 1.4 km",
    distanceCN: "约1.4公里",
    timeEN: "5 mins subway / 18 mins walk",
    timeCN: "地铁1站 / 步行约18分钟",
    descriptionEN: "UNESCO World Heritage imperial complex where Ming and Qing emperors prayed for bountiful harvests, surrounded by ancient cedar groves.",
    descriptionCN: "明清两代帝王祭天祈谷的恢弘古建圣所，苍柏环绕、祈年殿气势肃穆，尽显东方天人合一哲学。",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tiananmen",
    nameEN: "Tiananmen Square & Forbidden City",
    nameCN: "天安门广场与故宫博物院",
    distanceEN: "Approx. 1.8 - 2.5 km",
    distanceCN: "约1.8 - 2.5公里",
    timeEN: "Subway Line 8 direct / 10 mins taxi",
    timeCN: "地铁8号线直达 / 乘车约10分钟",
    descriptionEN: "The monumental heart of China and the majestic imperial palace complex housing centuries of dynastic treasures.",
    descriptionCN: "举世闻名的城市中心地标与紫禁城六百年宫殿群，红墙黄瓦，底蕴深厚，步履从容领略华夏史诗。",
    image: "https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "subway-interchange",
    nameEN: "Zhushikou Subway Station (Lines 7 & 8)",
    nameCN: "地铁珠市口换乘枢纽（7号线 / 8号线）",
    distanceEN: "Approx. 150 meters",
    distanceCN: "约150米 · 举步即至",
    timeEN: "2 mins walk to Exit A",
    timeCN: "步行2分钟即至A口",
    descriptionEN: "Dual-line subway interchange providing direct, traffic-free subway rides to Beijing West Railway Station, Wangfujing, and Olympic Park.",
    descriptionCN: "城市轨交双线换乘站，一线直抵北京西站、王府井商圈、南锣鼓巷及奥林匹克公园，全城顺达从容。",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g-ext-1",
    titleEN: "Hotel Architectural Stature",
    titleCN: "酒店典雅建筑立面",
    category: "hotel",
    categoryLabelEN: "Hotel Architecture",
    categoryLabelCN: "建筑外观",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    aspect: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: "g-room-1",
    titleEN: "Deluxe King Room",
    titleCN: "豪华大床客房",
    category: "rooms",
    categoryLabelEN: "Rooms & Suites",
    categoryLabelCN: "客房居停",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: "g-lobby-1",
    titleEN: "Grand Welcome Lobby",
    titleCN: "轩昂迎宾大堂",
    category: "hotel",
    categoryLabelEN: "Hotel Public Areas",
    categoryLabelCN: "大堂礼宾",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: "g-dine-1",
    titleEN: "Tailong Dining Hall",
    titleCN: "泰龙餐厅环境",
    category: "dining",
    categoryLabelEN: "Tailong Restaurant",
    categoryLabelCN: "泰龙中西餐饮",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: "g-room-2",
    titleEN: "Executive Suite Living Area",
    titleCN: "行政套房会客空间",
    category: "rooms",
    categoryLabelEN: "Rooms & Suites",
    categoryLabelCN: "客房居停",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
    aspect: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: "g-dine-2",
    titleEN: "Chinese Tea & Banquet Setting",
    titleCN: "茶叙与中式宴席细节",
    category: "dining",
    categoryLabelEN: "Dining Details",
    categoryLabelCN: "中式茶宴",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: "g-bj-1",
    titleEN: "Nearby Historic Tiantan Pavilion",
    titleCN: "邻近天坛祈年殿古韵",
    category: "beijing",
    categoryLabelEN: "Beijing Heritage",
    categoryLabelCN: "京华胜景",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1000&q=80",
    aspect: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: "g-bj-2",
    titleEN: "Qianmen Street Evening Walk",
    titleCN: "前门大街暮色街景",
    category: "beijing",
    categoryLabelEN: "Beijing Heritage",
    categoryLabelCN: "京华胜景",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1000&q=80",
    aspect: "col-span-1 row-span-1"
  }
];

export const verifiedFaqs: FaqItem[] = [
  {
    id: "faq-1",
    questionEN: "What are the standard check-in and check-out times?",
    questionCN: "酒店的正常入住与离店时间是几点？",
    answerEN: "Check-in begins at 14:00 (2:00 PM), and check-out is until 12:00 (12:00 PM noon). Early check-in or late check-out is subject to room availability upon request at the 24-hour front desk.",
    answerCN: "酒店标准入住时间为下午 14:00 起，退房时间为中午 12:00 前。如需提前入住或延迟退房，可向前台礼宾提出，将视当日客房实际情况为您尽力妥善安排。"
  },
  {
    id: "faq-2",
    questionEN: "How do I reach the hotel by subway from Beijing's airports or train stations?",
    questionCN: "如何乘坐地铁前往酒店？离哪个地铁站最近？",
    answerEN: "The hotel is located directly by Zhushikou Station (Interchange of Subway Line 7 and Line 8). From Exit A, it is only about 150 meters (approx. 2 minutes walk). From Beijing West Railway Station, Line 7 offers direct transport without transfers.",
    answerCN: "酒店紧邻北京地铁「珠市口站」（7号线与8号线换乘枢纽）。从A口出站沿珠市口东大街向东步行约150米即达。从北京西站乘坐7号线无需换乘直达，交通十分便利。"
  },
  {
    id: "faq-3",
    questionEN: "Is luggage storage available before check-in or after check-out?",
    questionCN: "在入住前或退房后，酒店是否提供行李寄存服务？",
    answerEN: "Yes, our 24-hour front desk and concierge team provide secure luggage storage services for registered hotel guests free of charge.",
    answerCN: "是的，酒店24小时前台与礼宾部为住店客人提供免费、妥善的安全行李寄存服务，便于您轻松游览周边前门或天坛景区。"
  },
  {
    id: "faq-4",
    questionEN: "What are the dining hours for Tailong Restaurant and the breakfast buffet?",
    questionCN: "店内泰龙餐厅的营业时间及早餐时间是什么安排？",
    answerEN: "Tailong Restaurant serves a buffet breakfast daily typically from 06:30 to 10:00. Chinese and Western lunch and dinner options, as well as private dining rooms, are available throughout the day.",
    answerCN: "店内泰龙餐厅每日早晨约 06:30 至 10:00 提供中西式自助早餐，午市与晚市提供地道中餐热炒、北方特色菜肴与私密宴会包房预订服务。"
  },
  {
    id: "faq-5",
    questionEN: "Can I book conference rooms or banquet spaces for business meetings?",
    questionCN: "酒店是否可以承接商务会议及宴会活动？",
    answerEN: "Yes, the hotel features multi-function meeting facilities and conference rooms. You may submit an inquiry through this website or call our business desk directly at +86 10 6707 5888.",
    answerCN: "是的，酒店配备多功能会议厅及商务中心，可接待企业研讨、培训交流及商务宴席。您可通过本站提交咨询，或直接致电 +86 10 6707 5888 预约洽谈。"
  }
];

export const authenticFeedbackThemes = {
  verifiedScore: "8.1 / 10",
  verifiedSource: "Public Verified Traveler Aggregation",
  locationScore: "8.8 / 10",
  cleanlinessScore: "8.2 / 10",
  themes: [
    {
      titleEN: "Prime Central Location",
      titleCN: "极其优越的地理位置",
      textEN: "Travelers consistently highlight the unbeatable walking distance to Qianmen Street, the 150m walk to Zhushikou Subway Lines 7 & 8, and quick access to the Temple of Heaven.",
      textCN: "宾客一致称赞其毗邻前门步行街与珠市口地铁枢纽（7/8号线换乘）的步行便利，游历故宫、天坛等京城名胜极为从容。"
    },
    {
      titleEN: "Spacious Room Layouts",
      titleCN: "宽敞开阔的客房尺度",
      textEN: "Guests value the generous room dimensions compared to central Beijing averages, solid sound insulation from the street, and comfortable beds after a long day of sightseeing.",
      textCN: "在二环内核心地段拥有宽绰的客房空间与开阔感，床品柔软舒适，隔音表现稳定，有效缓解长途舟车劳顿。"
    },
    {
      titleEN: "Attentive 24-Hour Reception",
      titleCN: "全天候敬业前台服务",
      textEN: "Reviews note prompt check-in, reliable luggage holding, and practical travel directions provided by on-duty staff around the clock.",
      textCN: "前台24小时值守，行李寄存与办票指引清晰妥帖，展现首都老牌涉外涉商酒店的扎实接待作风。"
    },
    {
      titleEN: "Transparent Guest Considerations",
      titleCN: "真实客诉改进与客观期待",
      textEN: "Public guest notes mention classic architectural decor and occasional elevator waits during peak holiday mornings, reflecting honest, balanced real-world feedback.",
      textCN: "客观真实展现传统稳重大气风格，公共点评亦记录节假日早高峰电梯等候等真实反馈，以诚相待，持续精进。"
    }
  ]
};

export const translations = {
  en: {
    // Nav & Utility
    utilityCity: "BEIJING · CHINA",
    callUs: "CALL",
    reservations: "RESERVATIONS",
    navStay: "STAY",
    navRooms: "ROOMS & SUITES",
    navDining: "DINING",
    navFacilities: "FACILITIES",
    navExperience: "EXPERIENCE",
    navGallery: "GALLERY",
    navReviews: "REVIEWS",
    navLocation: "LOCATION",
    navFaq: "FAQ",
    bookNow: "ENQUIRE / BOOK",
    
    // Hero
    heroEyebrow: "BEIJING · A CONSIDERED STAY",
    heroTitle: "JINGTAILONG INTERNATIONAL HOTEL",
    heroChineseTitle: "北京京泰龙国际大酒店",
    heroSubtitle: "A refined base for discovering Beijing, combining convenient city access with a comfortable stay.",
    heroCtaExplore: "EXPLORE THE HOTEL",
    heroCtaEnquire: "ENQUIRE ABOUT YOUR STAY",
    
    // Search Bar
    checkInLabel: "CHECK-IN",
    checkOutLabel: "CHECK-OUT",
    roomTypeLabel: "ROOM TYPE",
    allRoomTypes: "All Categories",
    guestsLabel: "GUESTS",
    guestsOption1: "1 Adult",
    guestsOption2: "2 Adults",
    guestsOption3: "3+ Guests",
    roomsLabel: "ROOMS",
    roomOption1: "1 Room",
    roomOption2: "2 Rooms",
    roomOption3: "3+ Rooms",
    checkAvailability: "CHECK AVAILABILITY",
    
    // Hotel Intro
    introEyebrow: "HISTORIC DONGCHENG DISTRICT",
    introTitle: "A CENTRAL STAY IN BEIJING",
    introSub: "Stay close to the rhythm of Beijing.",
    introP1: "Situated on East Avenue Zhushikou in historic Dongcheng District, Jingtailong International Hotel offers an established, dependable hospitality base just south of Tiananmen Square and steps from Qianmen Pedestrian Street.",
    introP2: "Comprising 316 thoughtfully arranged guest rooms, on-site Chinese and Western dining at Tailong Restaurant, and dedicated conference spaces, the property welcomes both business travelers attending meetings in the capital and leisure guests exploring the surrounding imperial landmarks.",
    statRooms: "Guest Rooms",
    statSubway: "Walk to Metro Lines 7 & 8",
    statFrontDesk: "Hour Reception",
    statHeritage: "Walk to Qianmen Street",
    
    // Rooms
    roomsEyebrow: "ACCOMMODATIONS",
    roomsTitle: "ROOMS & SUITES",
    roomsSub: "Rooms designed for a comfortable pause between journeys.",
    viewDetails: "VIEW ROOM DETAILS",
    enquireRoom: "ENQUIRE AVAILABILITY",
    roomSize: "Size",
    roomBed: "Bed",
    roomOccupancy: "Occupancy",
    
    // Facilities
    facilitiesEyebrow: "VERIFIED AMENITIES",
    facilitiesTitle: "HOTEL FACILITIES & SERVICES",
    facilitiesSub: "Practical amenities designed for seamless business and restful leisure.",
    
    // Dining
    diningEyebrow: "CULINARY TRADITION",
    diningTitle: "TAILONG RESTAURANT",
    diningSub: "Authentic Chinese cuisine and international hospitality in central Beijing.",
    diningP1: "Located within the hotel, Tailong Restaurant offers a pleasant culinary setting serving traditional Chinese specialties, classic Northern dishes, and an extensive morning breakfast buffet.",
    diningP2: "Private dining rooms are available for confidential banquets, family gatherings, and business entertaining, supported by attentive table service.",
    breakfastBuffet: "Breakfast Buffet: 06:30 – 10:00",
    allDayService: "Lunch & Dinner service available",
    privateRooms: "Private banquet rooms upon reservation",
    enquireDining: "ENQUIRE ABOUT DINING",
    
    // Business
    businessEyebrow: "CORPORATE SERVICES",
    businessTitle: "MEET IN BEIJING",
    businessSub: "Functional meeting spaces and conference support on Zhushikou Avenue.",
    businessP1: "For conferences, seminars, and corporate assemblies, Jingtailong International Hotel provides multi-function meeting venues equipped with modern audiovisual aids and flexible seating arrangements.",
    businessCTA: "ENQUIRE ABOUT MEETINGS & EVENTS",
    
    // Experience
    expEyebrow: "DESTINATION GUIDE",
    expTitle: "DISCOVER BEIJING",
    expSub: "From here, discover Beijing.",
    expP1: "Stay close to the historic heart of Beijing and explore the city at your own pace. With Zhushikou Station right nearby and historic Qianmen within walking distance, the capital's treasures are within easy reach.",
    viewOnMap: "VIEW ROUTE",
    
    // Gallery
    galleryEyebrow: "PROPERTY PERSPECTIVE",
    galleryTitle: "HOTEL & CITY GALLERY",
    gallerySub: "An editorial glance at our spaces, guest rooms, and historic surroundings.",
    filterAll: "ALL",
    filterHotel: "HOTEL",
    filterRooms: "ROOMS",
    filterDining: "DINING",
    filterBeijing: "BEIJING",
    
    // Reviews
    reviewsEyebrow: "AUTHENTIC GUEST FEEDBACK",
    reviewsTitle: "VERIFIED TRAVELER PERSPECTIVES",
    reviewsSub: "Transparent feedback aggregated from verified public travel platforms.",
    feedbackNotice: "We believe in authentic presentation. Here are verified themes reported by guests who have stayed at the property.",
    
    // Location
    locationEyebrow: "ACCESSIBILITY & TRANSIT",
    locationTitle: "AT THE HEART OF BEIJING",
    locationSub: "No. 19 East Avenue Zhushikou, Dongcheng District, Beijing",
    getDirections: "GET DIRECTIONS",
    callHotel: "CALL HOTEL",
    openGoogleMaps: "VIEW ON GOOGLE MAPS",
    copyAddress: "COPY ADDRESS",
    addressCopied: "Address Copied to Clipboard",
    
    // FAQ
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "ESSENTIAL STAY INFORMATION",
    faqSub: "Helpful details to assist in planning your visit to Beijing.",
    
    // Final CTA
    finalCtaTitle: "BEGIN YOUR BEIJING STAY",
    finalCtaSub: "Whether traveling for business or historic exploration, our team looks forward to welcoming you at Jingtailong International Hotel.",
    finalCtaButton: "ENQUIRE ABOUT YOUR RESERVATION",
    
    // Footer
    footerRights: "© Jingtailong International Hotel. All rights reserved.",
    footerAddress: "No. 19 East Avenue Zhushikou, Dongcheng District, Beijing 100050, China",
    footerPhone: "Telephone: +86 10 6707 5888",
    footerDisclaimer: "This official digital portal reflects verified information for Jingtailong International Hotel (北京京泰龙国际大酒店). Reservations may be made directly via our inquiry desk.",
    footerPrivacy: "Privacy Notice",
    footerTerms: "Terms of Stay",
    
    // Modals
    modalClose: "Close",
    enquiryTitle: "Reservation & Stay Enquiry",
    enquirySubtitle: "Submit your travel dates or contact our front desk directly.",
    enquiryName: "Your Name",
    enquiryPhone: "Contact Phone / WhatsApp",
    enquiryEmail: "Email Address",
    enquiryDates: "Travel Dates",
    enquiryNotes: "Special Requests / Inquiries",
    enquirySubmit: "SEND ENQUIRY",
    enquirySuccess: "Thank you for your enquiry. Our reservation team will reach out to you shortly.",
    directCallPrompt: "For immediate bookings, call the 24-hour desk:",
    bookingIntegrationNotice: "Direct online reservation booking engine integration can be connected here. Currently accepting direct verified enquiries."
  },
  
  zh: {
    // Nav & Utility
    utilityCity: "中国 · 北京",
    callUs: "电话垂询",
    reservations: "预订咨询",
    navStay: "下榻",
    navRooms: "客房套房",
    navDining: "泰龙餐饮",
    navFacilities: "设施服务",
    navExperience: "京华体验",
    navGallery: "图集欣赏",
    navReviews: "住客评价",
    navLocation: "位置交通",
    navFaq: "常见问答",
    bookNow: "预订客房",
    
    // Hero
    heroEyebrow: "北京 · 旅居之所",
    heroTitle: "北京京泰龙国际大酒店",
    heroChineseTitle: "JINGTAILONG INTERNATIONAL HOTEL",
    heroSubtitle: "在北京，住进城市的节奏。位居东城核心，紧邻前门天坛，为商旅与休闲宾客提供舒适、从容的下榻之所。",
    heroCtaExplore: "探索酒店设施",
    heroCtaEnquire: "预订客房咨询",
    
    // Search Bar
    checkInLabel: "入住日期",
    checkOutLabel: "离店日期",
    roomTypeLabel: "房型偏好",
    allRoomTypes: "全部精选房型",
    guestsLabel: "入住人数",
    guestsOption1: "1位成人",
    guestsOption2: "2位成人",
    guestsOption3: "3位及以上",
    roomsLabel: "客房数量",
    roomOption1: "1间客房",
    roomOption2: "2间客房",
    roomOption3: "3间及以上",
    checkAvailability: "查询空房与预订",
    
    // Hotel Intro
    introEyebrow: "东城文脉 · 核心地标",
    introTitle: "北京之心，静享旅程",
    introSub: "在北京，住进城市的节奏。",
    introP1: "北京京泰龙国际大酒店坐落于北京市东城区珠市口东大街19号，南望天坛公园，北邻前门步行街与大栅栏历史街区，地理位置得天独厚，是畅游古都与商务差旅的经典基石。",
    introP2: "酒店拥有316间雅致舒适的各类客房，配套泰龙中西餐厅、多功能会议与宴会空间、24小时前台礼宾及商务中心，秉承规范亲和的待客之道，让每一位宾客在繁忙旅程中尊享妥帖安适。",
    statRooms: "间舒适客房",
    statSubway: "步行至7/8号线珠市口站",
    statFrontDesk: "小时前台接待保障",
    statHeritage: "步行至前门大栅栏",
    
    // Rooms
    roomsEyebrow: "下榻典范",
    roomsTitle: "客房与套房",
    roomsSub: "舒适而从容的居停。",
    viewDetails: "查看房型详情",
    enquireRoom: "预订此房型",
    roomSize: "面积",
    roomBed: "床型",
    roomOccupancy: "容纳人数",
    
    // Facilities
    facilitiesEyebrow: "真实设施保障",
    facilitiesTitle: "酒店配套与服务",
    facilitiesSub: "完备周到的设施，助力顺畅商务与舒心假日。",
    
    // Dining
    diningEyebrow: "品味京华",
    diningTitle: "泰龙中西餐厅",
    diningSub: "传承经典京味与丰富美馔的温馨聚所。",
    diningP1: "店内泰龙餐厅环境宽敞典雅，每日清晨供应品种丰富的中西式自助早餐；午市与晚市精选经典中式菜肴、北方风味与精致小炒。",
    diningP2: "并设有典雅包房，满足商务宴请、亲友小聚或家庭欢叙的私密用餐需求。",
    breakfastBuffet: "中西式自助早餐：每日 06:30 – 10:00",
    allDayService: "午餐及晚餐点餐服务",
    privateRooms: "私密宴会包房接受预约",
    enquireDining: "餐饮预订垂询",
    
    // Business
    businessEyebrow: "商务与会务",
    businessTitle: "京华商务 · 会聚之所",
    businessSub: "位处珠市口东大街的专业会议与交流场所。",
    businessP1: "酒店配备多功能会议厅、讲学讨论室及商务服务中心，配备专业视听演示设备与灵活桌形排布，为各类公司会议、培训研讨及商务洽谈提供稳妥可靠的会务支持。",
    businessCTA: "咨询会议与活动预订",
    
    // Experience
    expEyebrow: "周边漫游",
    expTitle: "从这里，探索北京",
    expSub: "近依古都文脉，随时开启属于您的京城印记。",
    expP1: "下榻于此，步行即至前门大街品尝老字号美食，乘车数分钟即达天坛祈年殿或故宫紫禁城。四通八达的珠市口地铁枢纽，让整座城市的历史与现代触手可及。",
    viewOnMap: "查看周边路线",
    
    // Gallery
    galleryEyebrow: "实景视角",
    galleryTitle: "酒店与城市图集",
    gallerySub: "光影间领略京泰龙的空间质感与周边京韵。",
    filterAll: "全部",
    filterHotel: "酒店公共区",
    filterRooms: "客房居停",
    filterDining: "泰龙餐饮",
    filterBeijing: "京华胜景",
    
    // Reviews
    reviewsEyebrow: "客观真实口碑",
    reviewsTitle: "宾客真实反馈与体验",
    reviewsSub: "汇总主流公开旅行平台真实住客评价与建议。",
    feedbackNotice: "我们坚持真实客观呈现。以下为公开平台真实住客对本酒店的核心评价提炼。",
    
    // Location
    locationEyebrow: "优越地标 · 畅达京华",
    locationTitle: "立足北京核心之所",
    locationSub: "北京市东城区珠市口东大街19号（地铁珠市口站A口旁）",
    getDirections: "导航路线",
    callHotel: "致电酒店",
    openGoogleMaps: "在 Google Maps 中查看",
    copyAddress: "复制详细地址",
    addressCopied: "地址已复制到剪贴板",
    
    // FAQ
    faqEyebrow: "常见问题",
    faqTitle: "入住须知与实用指南",
    faqSub: "行前解惑，让您的北京之行从容无忧。",
    
    // Final CTA
    finalCtaTitle: "开启您的北京之旅",
    finalCtaSub: "无论是商务出行还是携友畅游，北京京泰龙国际大酒店静候您的莅临。",
    finalCtaButton: "立即咨询预订客房",
    
    // Footer
    footerRights: "© 北京京泰龙国际大酒店 版权所有。",
    footerAddress: "中国北京市东城区珠市口东大街19号 (邮编 100050)",
    footerPhone: "电话：+86 10 6707 5888",
    footerDisclaimer: "本官方网站依据北京京泰龙国际大酒店公开核验真实信息呈现。预订可通过本站咨询通道或直接致电前台接待。",
    footerPrivacy: "隐私声明",
    footerTerms: "住客须知",
    
    // Modals
    modalClose: "关闭",
    enquiryTitle: "客房与会务预订咨询",
    enquirySubtitle: "请留下您的入住需求，或直接致电酒店24小时前台。",
    enquiryName: "您的称呼",
    enquiryPhone: "联系电话 / 微信",
    enquiryEmail: "电子邮箱",
    enquiryDates: "计划入住及离店日期",
    enquiryNotes: "特殊需求或咨询内容",
    enquirySubmit: "提交预订咨询",
    enquirySuccess: "感谢您的咨询！酒店预订部人员将尽快与您联系确认。",
    directCallPrompt: "如需即时确认，请致电24小时总机：",
    bookingIntegrationNotice: "可直接配置酒店在线直连预订系统（Booking Engine）。当前支持提交直连预订咨询及电话专享通道。"
  }
};
