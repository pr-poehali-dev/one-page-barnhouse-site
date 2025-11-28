import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { projects, type Project } from '@/data/projects';

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000000]);
  const [areaRange, setAreaRange] = useState<[number, number]>([0, 300]);
  const [selectedCategory, setSelectedCategory] = useState<string>('все');
  const [selectedRooms, setSelectedRooms] = useState<string>('все');
  const [hasGarage, setHasGarage] = useState<boolean>(false);
  const [hasSauna, setHasSauna] = useState<boolean>(false);
  const [hasFireplace, setHasFireplace] = useState<boolean>(false);

  const filteredProjects = projects.filter((project) => {
    if (project.price < priceRange[0] || project.price > priceRange[1]) return false;
    if (project.area < areaRange[0] || project.area > areaRange[1]) return false;
    if (selectedCategory !== 'все' && project.category !== selectedCategory) return false;
    if (selectedRooms !== 'все' && project.rooms !== parseInt(selectedRooms)) return false;
    if (hasGarage && !project.hasGarage) return false;
    if (hasSauna && !project.hasSauna) return false;
    if (hasFireplace && !project.hasFireplace) return false;
    return true;
  });

  const resetFilters = () => {
    setPriceRange([0, 15000000]);
    setAreaRange([0, 300]);
    setSelectedCategory('все');
    setSelectedRooms('все');
    setHasGarage(false);
    setHasSauna(false);
    setHasFireplace(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Home" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">BarnHouse</h1>
            </Link>
            <Link to="/">
              <Button variant="outline">На главную</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Каталог домов</h1>
          <p className="text-muted-foreground text-lg">
            Найдено проектов: <span className="font-semibold text-foreground">{filteredProjects.length}</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Фильтры</h2>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    Сбросить
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">Цена, ₽</label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                          className="w-full px-3 py-2 border rounded text-sm"
                          placeholder="От"
                        />
                        <input
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full px-3 py-2 border rounded text-sm"
                          placeholder="До"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Площадь, м²</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={areaRange[0]}
                        onChange={(e) => setAreaRange([parseInt(e.target.value), areaRange[1]])}
                        className="w-full px-3 py-2 border rounded text-sm"
                        placeholder="От"
                      />
                      <input
                        type="number"
                        value={areaRange[1]}
                        onChange={(e) => setAreaRange([areaRange[0], parseInt(e.target.value)])}
                        className="w-full px-3 py-2 border rounded text-sm"
                        placeholder="До"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Стиль</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border rounded text-sm"
                    >
                      <option value="все">Все стили</option>
                      <option value="скандинавский">Скандинавский</option>
                      <option value="минимализм">Минимализм</option>
                      <option value="современный">Современный</option>
                      <option value="классический">Классический</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">Спален</label>
                    <select
                      value={selectedRooms}
                      onChange={(e) => setSelectedRooms(e.target.value)}
                      className="w-full px-3 py-2 border rounded text-sm"
                    >
                      <option value="все">Любое количество</option>
                      <option value="2">2 спальни</option>
                      <option value="3">3 спальни</option>
                      <option value="4">4 спальни</option>
                      <option value="5">5+ спален</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-semibold mb-3">Дополнительно</label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasGarage}
                        onChange={(e) => setHasGarage(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Гараж</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasSauna}
                        onChange={(e) => setHasSauna(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Сауна</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasFireplace}
                        onChange={(e) => setHasFireplace(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Камин</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            {filteredProjects.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Проекты не найдены</h3>
                  <p className="text-muted-foreground mb-4">
                    Попробуйте изменить параметры фильтров
                  </p>
                  <Button onClick={resetFilters}>Сбросить фильтры</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <Link to={`/catalog/${project.id}`}>
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                          {(project.price / 1000000).toFixed(1)} млн ₽
                        </div>
                        <Badge className="absolute top-4 left-4">
                          {project.category}
                        </Badge>
                      </div>
                    </Link>
                    <CardContent className="p-6">
                      <Link to={`/catalog/${project.id}`}>
                        <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      
                      <div className="grid grid-cols-4 gap-3 mb-4 text-sm">
                        <div className="text-center">
                          <Icon name="Maximize2" size={18} className="text-primary mx-auto mb-1" />
                          <div className="font-semibold">{project.area} м²</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Bed" size={18} className="text-primary mx-auto mb-1" />
                          <div className="font-semibold">{project.rooms}</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Layers" size={18} className="text-primary mx-auto mb-1" />
                          <div className="font-semibold">{project.floors} эт</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Bath" size={18} className="text-primary mx-auto mb-1" />
                          <div className="font-semibold">{project.bathrooms}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {project.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.features.length - 3}
                          </Badge>
                        )}
                      </div>

                      <Link to={`/catalog/${project.id}`}>
                        <Button className="w-full">Подробнее</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
