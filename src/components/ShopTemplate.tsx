import React, { useState } from 'react';
import { ArrowRight, Check, Star, Code, Layout, Palette, Zap, MessageSquare, Download, ShoppingCart, Search, Filter, Eye, Heart, Share2 } from 'lucide-react';
import { TemplateChat } from './TemplateChat';

interface Template {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  complexity: 'basic' | 'advanced' | 'premium';
  downloadUrl: string;
  previewUrl: string;
  rating: number;
  reviews: number;
  popular: boolean;
  new: boolean;
}

const templates: Template[] = [
  {
    id: 1,
    name: "Modern Business",
    category: "Business",
    description: "Clean and professional design for business websites",
    price: 5,
    features: ["Responsive Design", "Contact Form", "Service Showcase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    complexity: "basic",
    downloadUrl: "/templates/modern-business.zip",
    previewUrl: "/preview/modern-business",
    rating: 4.8,
    reviews: 124,
    popular: true,
    new: false
  },
  {
    id: 2,
    name: "Creative Portfolio",
    category: "Portfolio",
    description: "Showcase your work with style",
    price: 5,
    features: ["Gallery Grid", "Project Details", "About Section"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    complexity: "basic",
    downloadUrl: "/templates/creative-portfolio.zip",
    previewUrl: "/preview/creative-portfolio",
    rating: 4.6,
    reviews: 89,
    popular: true,
    new: true
  },
  {
    id: 3,
    name: "E-commerce Pro",
    category: "E-commerce",
    description: "Full-featured online store template",
    price: 17,
    features: ["Product Catalog", "Shopping Cart", "Payment Integration"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    complexity: "advanced",
    downloadUrl: "/templates/ecommerce-pro.zip",
    previewUrl: "/preview/ecommerce-pro",
    rating: 4.9,
    reviews: 256,
    popular: true,
    new: false
  },
  {
    id: 4,
    name: "Restaurant Menu",
    category: "Food & Beverage",
    description: "Elegant restaurant website template",
    price: 5,
    features: ["Menu Display", "Reservation System", "Food Gallery"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    complexity: "basic",
    downloadUrl: "/templates/restaurant-menu.zip",
    previewUrl: "/preview/restaurant-menu",
    rating: 4.7,
    reviews: 167,
    popular: false,
    new: true
  },
  {
    id: 5,
    name: "Fitness Studio",
    category: "Health & Fitness",
    description: "Dynamic fitness website template",
    price: 17,
    features: ["Class Schedule", "Trainer Profiles", "Membership Plans"],
    image: "https://images.unsplash.com/photo-1534438327276-14eebb3f3d0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    complexity: "advanced",
    downloadUrl: "/templates/fitness-studio.zip",
    previewUrl: "/preview/fitness-studio",
    rating: 4.8,
    reviews: 143,
    popular: true,
    new: false
  },
  {
    id: 6,
    name: "Real Estate",
    category: "Real Estate",
    description: "Professional real estate listing template",
    price: 17,
    features: ["Property Listings", "Search Filters", "Agent Profiles"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    complexity: "advanced",
    downloadUrl: "/templates/real-estate.zip",
    previewUrl: "/preview/real-estate",
    rating: 4.9,
    reviews: 198,
    popular: true,
    new: false
  }
];

export const ShopTemplate: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [showPricing, setShowPricing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [showChat, setShowChat] = useState(false);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price-low' | 'price-high'>('popular');
  const [showPreview, setShowPreview] = useState(false);
  const [purchaseForm, setPurchaseForm] = useState({
    email: '',
    phone: '',
    name: ''
  });

  const categories = ['all', ...new Set(templates.map(t => t.category))];
  const complexities = ['all', 'basic', 'advanced', 'premium'];

  const filteredTemplates = templates
    .filter(template => {
      const categoryMatch = selectedCategory === 'all' || template.category === selectedCategory;
      const complexityMatch = selectedComplexity === 'all' || template.complexity === selectedComplexity;
      const searchMatch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && complexityMatch && searchMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.rating - a.rating;
        case 'newest':
          return b.new ? 1 : -1;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setShowPricing(true);
  };

  const handleBuyNow = (template: Template) => {
    setSelectedTemplate(template);
    setShowPurchaseForm(true);
  };

  const handlePreview = (template: Template) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  };

  const handlePurchaseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTemplate) return;

    // Here you would typically:
    // 1. Process payment
    // 2. Send confirmation email/SMS
    // 3. Trigger download

    // For demo purposes, we'll just trigger the download
    const link = document.createElement('a');
    link.href = selectedTemplate.downloadUrl;
    link.download = `${selectedTemplate.name.toLowerCase().replace(/\s+/g, '-')}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    alert(`Thank you for your purchase! Your template has been downloaded and a confirmation has been sent to ${purchaseForm.email}`);
    setShowPurchaseForm(false);
    setPurchaseForm({ email: '', phone: '', name: '' });
  };

  const getComplexityLabel = (complexity: string) => {
    switch (complexity) {
      case 'basic': return 'Basic Template';
      case 'advanced': return 'Advanced Template';
      case 'premium': return 'Premium Template';
      default: return 'All Templates';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Template
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Select from our collection of professionally designed templates
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search templates..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={selectedComplexity}
                onChange={(e) => setSelectedComplexity(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {complexities.map(complexity => (
                  <option key={complexity} value={complexity}>
                    {getComplexityLabel(complexity)}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              <button
                onClick={() => setShowChat(!showChat)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {showChat ? 'Hide AI Chat' : 'Chat with AI'}
              </button>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        {showChat && (
          <div className="mt-8">
            <TemplateChat />
          </div>
        )}

        {/* Template Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="absolute top-2 right-2 flex space-x-2">
                  {template.new && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      New
                    </span>
                  )}
                  {template.popular && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Popular
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePreview(template)}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                    >
                      <Eye className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                      onClick={() => handleBuyNow(template)}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                    >
                      <ShoppingCart className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                    >
                      <Heart className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                    >
                      <Share2 className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{template.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({template.reviews})</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-500">{template.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {template.complexity.charAt(0).toUpperCase() + template.complexity.slice(1)}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${template.price}</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleTemplateSelect(template)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleBuyNow(template)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Buy Now
                      <ShoppingCart className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Modal */}
        {showPreview && selectedTemplate && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowPreview(false)}></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {selectedTemplate.name} Preview
                        </h3>
                        <button
                          onClick={() => setShowPreview(false)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-4">
                        <iframe
                          src={selectedTemplate.previewUrl}
                          className="w-full h-[600px] border-0"
                          title={`${selectedTemplate.name} Preview`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setShowPreview(false);
                      setShowPurchaseForm(true);
                    }}
                  >
                    Purchase Template
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowPreview(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Purchase Form Modal */}
        {showPurchaseForm && selectedTemplate && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowPurchaseForm(false)}></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Purchase Template
                      </h3>
                      <div className="mt-4">
                        <form onSubmit={handlePurchaseSubmit} className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={purchaseForm.name}
                              onChange={(e) => setPurchaseForm(prev => ({ ...prev, name: e.target.value }))}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={purchaseForm.email}
                              onChange={(e) => setPurchaseForm(prev => ({ ...prev, email: e.target.value }))}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              value={purchaseForm.phone}
                              onChange={(e) => setPurchaseForm(prev => ({ ...prev, phone: e.target.value }))}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              required
                            />
                          </div>
                          <div className="mt-4">
                            <p className="text-sm text-gray-500">
                              Total: ${selectedTemplate.price}
                            </p>
                          </div>
                          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button
                              type="submit"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Purchase and Download
                              <Download className="ml-2 h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowPurchaseForm(false)}
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Modal */}
        {showPricing && selectedTemplate && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowPricing(false)}></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Template Pricing Options
                      </h3>
                      <div className="mt-4 space-y-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold">Basic Template</h4>
                          <p className="text-gray-600">${selectedTemplate.price}</p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              Template files only
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              Basic customization
                            </li>
                          </ul>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold">Advanced Template</h4>
                          <p className="text-gray-600">$17</p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              Enhanced CSS and JS
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              React components
                            </li>
                          </ul>
                        </div>

                        <div className="border rounded-lg p-4 bg-indigo-50">
                          <h4 className="font-semibold">Full Service</h4>
                          <p className="text-gray-600">$300 - $500</p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              Complete website development
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              Frontend and backend
                            </li>
                            <li className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              Custom features and integrations
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setShowPricing(false);
                      setShowPurchaseForm(true);
                    }}
                  >
                    Purchase Template
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowPricing(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 