import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Landmark,
  Heart,
  GraduationCap,
  Sprout,
  FileText,
  Briefcase,
  TrendingUp,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  Flag,
  Home as HomeIcon,
  Building,
  TreePine,
  Camera,
  Newspaper,
  Droplet,
  Zap,
  Trash2,
  Ambulance,
  Pill,
  Hospital,
  Wheat,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" data-testid="header-main">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3" data-testid="header-logo">
              <Flag className="w-6 h-6 text-primary" data-testid="icon-header-flag" />
              <h1 className="text-lg md:text-xl font-bold text-foreground">अधिकृत ग्रामपंचायत पोर्टल</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6" data-testid="nav-main">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-link-about"
              >
                परिचय
              </button>
              <button
                onClick={() => scrollToSection('schemes')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-link-schemes"
              >
                योजना
              </button>
              <button
                onClick={() => scrollToSection('infrastructure')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-link-infrastructure"
              >
                सुविधा
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-link-news"
              >
                बातम्या
              </button>
            </nav>
            <button
              className="md:hidden p-2 hover-elevate active-elevate-2 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" data-testid="icon-menu-close" />
              ) : (
                <Menu className="w-6 h-6" data-testid="icon-menu-open" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background" data-testid="mobile-menu">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                data-testid="nav-link-mobile-about"
              >
                परिचय
              </button>
              <button
                onClick={() => scrollToSection('schemes')}
                className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                data-testid="nav-link-mobile-schemes"
              >
                योजना
              </button>
              <button
                onClick={() => scrollToSection('infrastructure')}
                className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                data-testid="nav-link-mobile-infrastructure"
              >
                सुविधा
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                data-testid="nav-link-mobile-news"
              >
                बातम्या
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Image Overlay Effect */}
      <section className="relative overflow-hidden" style={{ height: '700px' }}>
        {/* Background Image Effect - Gradient representing rural landscape */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-amber-100/30 to-blue-900/20" data-testid="hero-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_hsl(120_40%_40%/0.2)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(45_60%_60%/0.3)_0%,transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,_hsl(200_50%_30%/0.2)_0%,transparent_50%)]"></div>
        </div>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 backdrop-blur-sm"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Flag className="w-12 h-12 text-primary" data-testid="icon-flag" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-sm" data-testid="text-hero-title">
                अधिकृत ग्रामपंचायत पोर्टल
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto drop-shadow-sm" data-testid="text-hero-subtitle">
                पारदर्शक प्रशासन, समृद्ध वारसा, आणि प्रगतीशील विकास
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('about')}
                  className="px-8"
                  data-testid="button-about"
                >
                  आमच्याबद्दल जाणून घ्या
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('schemes')}
                  data-testid="button-schemes"
                >
                  योजना पहा
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid Section */}
      <section className="py-12 md:py-16 bg-background -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover-elevate" data-testid="card-stat-villagers">
              <div className="text-4xl md:text-5xl font-bold text-primary" data-testid="value-villagers">5000+</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2" data-testid="label-villagers">गावकरी</div>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-stat-schemes">
              <div className="text-4xl md:text-5xl font-bold text-primary" data-testid="value-schemes">50+</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2" data-testid="label-schemes">योजना</div>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-stat-projects">
              <div className="text-4xl md:text-5xl font-bold text-primary" data-testid="value-projects">100+</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2" data-testid="label-projects">प्रकल्प</div>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-stat-years">
              <div className="text-4xl md:text-5xl font-bold text-primary" data-testid="value-years">200+</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2" data-testid="label-years">वर्षे</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-quicklinks">त्वरित लिंक्स</h2>
            <p className="text-muted-foreground">महत्त्वाच्या विभागांवर जलद प्रवेश</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "योजना व सबसिडी", id: "schemes" },
              { icon: Building2, title: "पायाभूत सुविधा", id: "infrastructure" },
              { icon: Heart, title: "आरोग्य सुविधा", id: "health" },
              { icon: GraduationCap, title: "शिक्षण", id: "education" },
              { icon: Sprout, title: "कृषी माहिती", id: "agriculture" },
              { icon: Landmark, title: "नागरिक सेवा", id: "about" },
              { icon: Briefcase, title: "स्वयंरोजगार", id: "schemes" },
              { icon: TrendingUp, title: "विकास प्रकल्प", id: "news" },
              { icon: Users, title: "ग्रामसभा निर्णय", id: "news" },
            ].map((link, idx) => (
              <Card
                key={idx}
                className="p-6 hover-elevate active-elevate-2 cursor-pointer group"
                onClick={() => scrollToSection(link.id)}
                data-testid={`card-quicklink-${idx}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <link.icon className="w-6 h-6" data-testid={`icon-quicklink-${idx}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" data-testid={`title-quicklink-${idx}`}>{link.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gram Panchayat Introduction */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-introduction">ग्रामपंचायत परिचय</h2>
            <p className="text-muted-foreground">आमच्या गावाची माहिती, मान्यवर आणि संपर्क तपशील</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Village Info */}
            <Card className="p-8" data-testid="card-village-info">
              <h3 className="text-2xl font-bold mb-4 text-foreground">ग्रामपंचायत माहिती</h3>
              <p className="text-sm text-muted-foreground mb-6">आमच्या ग्रामपंचायतीची संपूर्ण माहिती</p>
              <p className="text-foreground mb-8 leading-relaxed" data-testid="text-village-description">
                आमचे गाव महाराष्ट्रातील एक प्राचीन आणि समृद्ध गाव आहे. येथे पारंपरिक संस्कृती आणि आधुनिक विकास यांचा सुंदर समन्वय पाहायला मिळतो.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3" data-testid="stat-population">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground" data-testid="value-population">5000+</div>
                    <div className="text-sm text-muted-foreground">लोकसंख्या</div>
                  </div>
                </div>
                <div className="flex items-center gap-3" data-testid="stat-area">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground" data-testid="value-area">15 किमी²</div>
                    <div className="text-sm text-muted-foreground">क्षेत्रफळ</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Panchayat Members */}
            <Card className="p-8" data-testid="card-members">
              <h3 className="text-2xl font-bold mb-4 text-foreground">पंचायत सदस्य</h3>
              <p className="text-sm text-muted-foreground mb-6">ग्रामपंचायत पदाधिकारी आणि सदस्य</p>
              <div className="space-y-6">
                {[
                  { name: "श्री. नामदेव पाटील", role: "सरपंच", phone: "+91 98765 43210" },
                  { name: "श्रीमती सुनिता देशमुख", role: "उपसरपंच", phone: "+91 98765 43211" },
                  { name: "श्री राजेश कुलकर्णी", role: "ग्रामसेवक", phone: "+91 98765 43212" },
                ].map((member, idx) => (
                  <div key={idx} className="space-y-2" data-testid={`member-${idx}`}>
                    <h4 className="font-semibold text-foreground" data-testid={`member-name-${idx}`}>{member.name}</h4>
                    <p className="text-sm text-muted-foreground" data-testid={`member-role-${idx}`}>{member.role}</p>
                    <p className="text-sm text-foreground flex items-center gap-2" data-testid={`member-phone-${idx}`}>
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-8" data-testid="card-contact">
              <h3 className="text-2xl font-bold mb-4 text-foreground">संपर्क माहिती</h3>
              <p className="text-sm text-muted-foreground mb-6">आमच्याशी संपर्क साधा</p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">फोन</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-foreground" data-testid="contact-phone-1">
                      <Phone className="w-4 h-4" />
                      +91 98765 43210
                    </p>
                    <p className="flex items-center gap-2 text-foreground" data-testid="contact-phone-2">
                      <Phone className="w-4 h-4" />
                      +91 98765 43211
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">ईमेल</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-foreground" data-testid="contact-email-1">
                      <Mail className="w-4 h-4" />
                      grampanchayat@example.com
                    </p>
                    <p className="flex items-center gap-2 text-foreground" data-testid="contact-email-2">
                      <Mail className="w-4 h-4" />
                      info@grampanchayat.in
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">पत्ता</h4>
                  <p className="text-sm text-foreground flex items-start gap-2" data-testid="contact-address">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>ग्रामपंचायत कार्यालय<br />मुख्य रस्ता, गावाचे नाव<br />जिल्हा, महाराष्ट्र - 411001</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Village History */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-history">ग्राम इतिहास</h2>
            <p className="text-muted-foreground">आमच्या गावाची समृद्ध सांस्कृतिक वारसा आणि ऐतिहासिक महत्त्व</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8" data-testid="card-ancient-places">
              <h3 className="text-2xl font-bold mb-4 text-foreground">प्राचीन स्थळे</h3>
              <p className="text-sm text-muted-foreground mb-6">ऐतिहासिक धार्मिक आणि सांस्कृतिक स्थळे</p>
              <div className="space-y-4">
                {[
                  { icon: Landmark, title: "श्री राम मंदिर", age: "300 वर्षे पुरातन" },
                  { icon: Building, title: "जुना वाडा", age: "मराठा काळातील वास्तू" },
                  { icon: TreePine, title: "पवित्र वटवृक्ष", age: "500 वर्षांपेक्षा जुना" },
                ].map((place, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50" data-testid={`place-${idx}`}>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <place.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`place-title-${idx}`}>{place.title}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`place-age-${idx}`}>{place.age}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8" data-testid="card-cultural-heritage">
              <h3 className="text-2xl font-bold mb-4 text-foreground">सांस्कृतिक वारसा</h3>
              <p className="text-sm text-muted-foreground mb-6">परंपरा आणि लोकसंस्कृती</p>
              <p className="text-foreground mb-6 leading-relaxed">
                आमच्या गावाची संस्कृती अत्यंत समृद्ध आहे. येथे वर्षभर विविध सण-उत्सव साजरे केले जातात.
              </p>
              <div className="space-y-3">
                {[
                  { festival: "गणेशोत्सव", description: "भव्य दहा दिवस" },
                  { festival: "दिवाळी", description: "पारंपरिक साजरी" },
                  { festival: "होळी", description: "रंगांचा उत्सव" },
                ].map((event, idx) => (
                  <div key={idx} className="flex items-center gap-3" data-testid={`festival-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{event.festival}</span>
                      <span className="text-muted-foreground"> - {event.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Historical Timeline */}
          <Card className="p-8" data-testid="card-timeline">
            <h3 className="text-2xl font-bold mb-6 text-foreground">ऐतिहासिक घटना</h3>
            <p className="text-sm text-muted-foreground mb-8">महत्त्वाच्या काळातील घटना</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { year: "1720", event: "गावाची स्थापना" },
                { year: "1857", event: "स्वातंत्र्य चळवळीत सहभाग" },
                { year: "1947", event: "स्वतंत्र भारतातील पहिली ग्रामसभा" },
                { year: "2000", event: "आदर्श ग्रामपंचायत पुरस्कार" },
              ].map((milestone, idx) => (
                <div key={idx} className="text-center" data-testid={`timeline-${idx}`}>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`timeline-year-${idx}`}>{milestone.year}</div>
                  <p className="text-sm text-foreground" data-testid={`timeline-event-${idx}`}>{milestone.event}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Schemes Section */}
      <section id="schemes" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-schemes">योजना व सबसिडी</h2>
            <p className="text-muted-foreground">उपलब्ध सरकारी योजना आणि पात्रता तपशील</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "पंतप्रधान आवास योजना", subtitle: "गृहनिर्माण अनुदान योजना", eligibility: "कमी उत्पन्न कुटुंबे" },
              { title: "स्वच्छ भारत मिशन", subtitle: "स्वच्छता अभियान", eligibility: "सर्व नागरिक" },
              { title: "किसान सम्मान निधी", subtitle: "शेतकरी आर्थिक मदत", eligibility: "लघु व सीमांत शेतकरी" },
              { title: "उज्ज्वला योजना", subtitle: "मोफत गॅस कनेक्शन", eligibility: "BPL कुटुंबे" },
              { title: "आयुष्मान भारत", subtitle: "आरोग्य विमा योजना", eligibility: "गरीब कुटुंबे" },
              { title: "सौभाग्य योजना", subtitle: "मोफत वीज जोडणी", eligibility: "सर्व घरे" },
            ].map((scheme, idx) => (
              <Card key={idx} className="p-6 hover-elevate" data-testid={`card-scheme-${idx}`}>
                <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`scheme-title-${idx}`}>{scheme.title}</h3>
                <p className="text-sm text-muted-foreground mb-4" data-testid={`scheme-subtitle-${idx}`}>{scheme.subtitle}</p>
                <Badge variant="secondary" className="text-xs" data-testid={`scheme-eligibility-${idx}`}>{scheme.eligibility}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-infrastructure">ग्राम पायाभूत सुविधा</h2>
            <p className="text-muted-foreground">पाणी, रस्ते, वीज आणि स्वच्छता सुविधा</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Droplet,
                title: "पाणी पुरवठा",
                subtitle: "पिण्याच्या पाण्याची व्यवस्था",
                features: ["24x7 पाणी पुरवठा सुविधा", "15 सार्वजनिक नळ", "100% घरांना जोडणी", "नियमित गुणवत्ता तपासणी"],
              },
              {
                icon: Building2,
                title: "रस्ते आणि दळणवळण",
                subtitle: "रस्त्यांची स्थिती",
                features: ["25 किमी डांबरी रस्ते", "10 किमी सिमेंट रस्ते", "नियमित देखभाल", "सार्वजनिक वाहतूक सुविधा"],
              },
              {
                icon: Zap,
                title: "वीज पुरवठा",
                subtitle: "विजेची व्यवस्था",
                features: ["100% विद्युतीकरण", "कमी व्होल्टेजची समस्या नाही", "सौर ऊर्जा प्रकल्प", "LED स्ट्रीट लाइट्स"],
              },
              {
                icon: Trash2,
                title: "स्वच्छता",
                subtitle: "कचरा व्यवस्थापन",
                features: ["दैनंदिन कचरा संकलन", "100% शौचालय सुविधा", "कंपोस्ट प्रकल्प", "स्वच्छ भारत अभियान"],
              },
            ].map((facility, idx) => (
              <Card key={idx} className="p-6" data-testid={`card-infrastructure-${idx}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground" data-testid={`infrastructure-title-${idx}`}>{facility.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{facility.subtitle}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-foreground" data-testid={`infrastructure-feature-${idx}-${fIdx}`}>
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Facilities */}
      <section id="health" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-health">आरोग्य सुविधा</h2>
            <p className="text-muted-foreground">हॉस्पिटल आणि प्राथमिक आरोग्य केंद्रे</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8" data-testid="card-phc">
              <h3 className="text-2xl font-bold text-foreground mb-2">प्राथमिक आरोग्य केंद्र</h3>
              <p className="text-sm text-muted-foreground mb-6">मूलभूत वैद्यकीय सुविधा</p>
              <div className="space-y-4 mb-6">
                <p className="flex items-start gap-2 text-sm" data-testid="phc-location">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-foreground">गाव मुख्य रस्ता, PHC इमारत</span>
                </p>
                <p className="flex items-start gap-2 text-sm" data-testid="phc-timing">
                  <Calendar className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-foreground">सोमवार - शनिवार: 9:00 - 17:00</span>
                </p>
                <p className="flex items-start gap-2 text-sm" data-testid="phc-doctor">
                  <Heart className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-foreground">डॉ. राजेश पाटील (MBBS)</span>
                </p>
                <p className="flex items-start gap-2 text-sm" data-testid="phc-phone">
                  <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-foreground">+91 98765 00001</span>
                </p>
              </div>
              <div className="space-y-2">
                {["मोफत औषधे", "लसीकरण", "प्रसूती केंद्र"].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-foreground" data-testid={`phc-service-${idx}`}>
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8" data-testid="card-emergency">
              <h3 className="text-2xl font-bold text-foreground mb-2">आपत्कालीन सेवा</h3>
              <p className="text-sm text-muted-foreground mb-6">24x7 आपत्कालीन वैद्यकीय मदत</p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">आपत्कालीन नंबर</h4>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-destructive" />
                      <div className="text-3xl font-bold text-destructive" data-testid="emergency-number">108</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Ambulance, text: "अॅम्ब्युलन्स सेवा उपलब्ध" },
                    { icon: Hospital, text: "जवळचे हॉस्पिटल: 10 किमी" },
                    { icon: Pill, text: "24x7 औषधांचे दुकान" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm" data-testid={`emergency-service-${idx}`}>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-education">शिक्षण संस्था</h2>
            <p className="text-muted-foreground">शाळा, महाविद्यालये आणि शैक्षणिक प्रगती</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "प्राथमिक शाळा",
                subtitle: "इयत्ता 1 ते 7",
                stats: [
                  { icon: Users, label: "विद्यार्थी", value: "250+" },
                  { icon: GraduationCap, label: "शिक्षक", value: "15" },
                ],
                features: ["मध्यान्ह भोजन", "संगणक शिक्षण"],
              },
              {
                title: "माध्यमिक शाळा",
                subtitle: "इयत्ता 8 ते 10",
                stats: [
                  { icon: Users, label: "विद्यार्थी", value: "180+" },
                  { icon: GraduationCap, label: "शिक्षक", value: "12" },
                ],
                features: ["विज्ञान प्रयोगशाळा", "ग्रंथालय सुविधा"],
              },
              {
                title: "उच्च माध्यमिक",
                subtitle: "इयत्ता 11 ते 12",
                stats: [
                  { icon: Users, label: "विद्यार्थी", value: "120+" },
                  { icon: GraduationCap, label: "शिक्षक", value: "10" },
                ],
                features: ["विज्ञान व वाणिज्य", "98% परिणाम"],
              },
            ].map((school, idx) => (
              <Card key={idx} className="p-6" data-testid={`card-education-${idx}`}>
                <h3 className="text-xl font-bold text-foreground mb-1" data-testid={`education-title-${idx}`}>{school.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{school.subtitle}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {school.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="text-center" data-testid={`education-stat-${idx}-${sIdx}`}>
                      <div className="p-2 rounded-lg bg-primary/10 inline-block mb-2">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="font-semibold text-foreground text-sm">{stat.label}: {stat.value}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {school.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm" data-testid={`education-feature-${idx}-${fIdx}`}>
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agriculture */}
      <section id="agriculture" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-agriculture">कृषी माहिती</h2>
            <p className="text-muted-foreground">पिके, बाजारभाव आणि शेतकरी सुविधा</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8" data-testid="card-crops">
              <h3 className="text-2xl font-bold text-foreground mb-4">मुख्य पिके</h3>
              <p className="text-sm text-muted-foreground mb-6">गावातील प्रमुख पिके</p>
              <div className="grid grid-cols-3 gap-4">
                {["भात", "गहू", "ज्वारी", "बाजरा", "कापूस", "ऊस"].map((crop, idx) => (
                  <div key={idx} className="text-center p-4 rounded-lg bg-muted/50" data-testid={`crop-${idx}`}>
                    <div className="p-2 rounded-lg bg-primary/10 inline-block mb-2">
                      <Wheat className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-foreground">{crop}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8" data-testid="card-irrigation">
              <h3 className="text-2xl font-bold text-foreground mb-4">सिंचन सुविधा</h3>
              <p className="text-sm text-muted-foreground mb-6">पाणी पुरवठा व्यवस्था</p>
              <ul className="space-y-3">
                {[
                  "5 विहिरी आणि बोअरवेल",
                  "ठिबक सिंचन प्रकल्प",
                  "तलाव संरक्षण",
                  "सरकारी सिंचन योजना",
                ].map((facility, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground" data-testid={`irrigation-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-gallery">फोटो गॅलरी</h2>
            <p className="text-muted-foreground">गावातील कार्यक्रम आणि उत्सव</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "गणेशोत्सव 2024", subtitle: "भव्य उत्सव" },
              { title: "स्वच्छता अभियान", subtitle: "गाव स्वच्छता" },
              { title: "शाळा वार्षिकोत्सव", subtitle: "विद्यार्थी कार्यक्रम" },
              { title: "कृषी मेळावा", subtitle: "शेतकरी संमेलन" },
              { title: "आरोग्य तपासणी", subtitle: "मोफत तपासणी शिबीर" },
              { title: "पंचायत बैठक", subtitle: "ग्रामसभा" },
            ].map((event, idx) => (
              <Card key={idx} className="overflow-hidden hover-elevate" data-testid={`card-gallery-${idx}`}>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-primary/40" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1" data-testid={`gallery-title-${idx}`}>{event.title}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`gallery-subtitle-${idx}`}>{event.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-news">ताज्या बातम्या</h2>
            <p className="text-muted-foreground">गावातील नवीनतम घडामोडी आणि अपडेट्स</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "विकास",
                date: "15 मार्च 2024",
                title: "नवीन पाणी पुरवठा प्रकल्प सुरू",
                description: "गावात 24x7 पाणी पुरवठा सुनिश्चित करण्यासाठी नवीन प्रकल्प सुरू करण्यात आला.",
                source: "ग्रामपंचायत",
              },
              {
                category: "बातमी",
                date: "10 मार्च 2024",
                title: "आदर्श ग्रामपंचायत पुरस्कार प्राप्त",
                description: "राज्य सरकारकडून आमच्या गावाला आदर्श ग्रामपंचायत पुरस्कार प्रदान करण्यात आला.",
                source: "प्रशासन",
              },
              {
                category: "शिक्षण",
                date: "5 मार्च 2024",
                title: "डिजिटल साक्षरता कार्यक्रम",
                description: "गावकर्‍यांसाठी मोफत डिजिटल साक्षरता प्रशिक्षण कार्यक्रम सुरू.",
                source: "शिक्षण विभाग",
              },
              {
                category: "पर्यावरण",
                date: "1 मार्च 2024",
                title: "सौर ऊर्जा प्रकल्प यशस्वी",
                description: "गावातील सार्वजनिक इमारतींवर सौर ऊर्जा प्रकल्प यशस्वीपणे पूर्ण झाला.",
                source: "ऊर्जा विभाग",
              },
            ].map((news, idx) => (
              <Card key={idx} className="p-6 hover-elevate" data-testid={`card-news-${idx}`}>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" data-testid={`news-category-${idx}`}>{news.category}</Badge>
                  <span className="text-sm text-muted-foreground" data-testid={`news-date-${idx}`}>{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`news-title-${idx}`}>{news.title}</h3>
                <p className="text-foreground mb-4 leading-relaxed" data-testid={`news-description-${idx}`}>{news.description}</p>
                <p className="text-sm text-muted-foreground" data-testid={`news-source-${idx}`}>{news.source}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-card-border py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Flag className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">अधिकृत ग्रामपंचायत पोर्टल</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">पारदर्शक प्रशासन, समृद्ध वारसा, आणि प्रगतीशील विकास</p>
            <p className="text-xs text-muted-foreground" data-testid="text-copyright">© 2024 ग्रामपंचायत. सर्व हक्क राखीव.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
