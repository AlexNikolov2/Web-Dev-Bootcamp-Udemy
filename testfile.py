import math
import ezdxf

# Параметри на зъбното колело
module = 1.5
z = 50
pressure_angle_deg = 20
pressure_angle = math.radians(pressure_angle_deg)

# Основни диаметри
d = module * z
r = d / 2
addendum = module
dedendum = 1.25 * module
outer_radius = r + addendum
root_radius = r - dedendum
base_radius = r * math.cos(pressure_angle)
bore_radius = 10  # Ø20 H7

# Генерация на еволвентен профил
def involute_points(base_radius, outer_radius, steps=20):
    points = []
    phi_max = math.sqrt((outer_radius**2 - base_radius**2) / base_radius**2)
    for i in range(steps):
        phi = phi_max * i / (steps - 1)
        x = base_radius * (math.cos(phi) + phi * math.sin(phi))
        y = base_radius * (math.sin(phi) - phi * math.cos(phi))
        points.append((x, y))
    return points

# Завъртане
def rotate(p, a):
    x, y = p
    return (
        x * math.cos(a) - y * math.sin(a),
        x * math.sin(a) + y * math.cos(a)
    )

# Създаване на DXF
doc = ezdxf.new(dxfversion="R2010")
msp = doc.modelspace()

# Зъбен профил
for i in range(z):
    angle = 2 * math.pi * i / z
    inv_right = involute_points(base_radius, outer_radius)
    inv_left = [(-x, y) for x, y in inv_right][::-1]
    tooth = inv_right + inv_left
    rotated = [rotate(p, angle) for p in tooth]
    for j in range(len(rotated) - 1):
        msp.add_line(rotated[j], rotated[j + 1])

# Кръгове
msp.add_circle((0, 0), bore_radius)
msp.add_circle((0, 0), root_radius, dxfattribs={"linetype": "DOTTED"})
msp.add_circle((0, 0), r, dxfattribs={"linetype": "DASHED"})
msp.add_circle((0, 0), outer_radius)

# Запазване
doc.saveas("zaben_venec.dxf")
print("✅ Файлът 'zaben_venec.dxf' е създаден успешно!")
