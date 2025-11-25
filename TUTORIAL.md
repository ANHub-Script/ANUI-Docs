# 📚 ANUI Tutorial - Getting Started Guide

Panduan lengkap untuk memulai dengan ANUI, dari instalasi hingga membuat UI pertama Anda.

---

## 📖 Daftar Isi

1. [Prerequisites](#prerequisites)
2. [Instalasi](#instalasi)
3. [Membuat Window Pertama](#membuat-window-pertama)
4. [Menambahkan Tab dan Section](#menambahkan-tab-dan-section)
5. [Komponen Dasar](#komponen-dasar)
6. [Tips dan Trik](#tips-dan-trik)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Sebelum memulai, pastikan Anda memiliki:

- ✅ Roblox Executor yang support `loadstring` dan `HttpGet`
- ✅ Pengetahuan dasar tentang Lua/Luau
- ✅ Game Roblox yang mendukung scripting

---

## Instalasi

### Metode 1: Load dari GitHub (Direkomendasikan)

```lua
local ANUI = loadstring(game:HttpGet(
    "https://raw.githubusercontent.com/ANHub-Script/ANUI/refs/heads/main/dist/main.lua"
))()
```

### Metode 2: Load Example Script

Untuk melihat semua contoh:

```lua
loadstring(game:HttpGet(
    'https://raw.githubusercontent.com/ANHub-Script/ANUI/refs/heads/main/main_example.lua'
))()
```

---

## Membuat Window Pertama

### Step 1: Load Library

```lua
-- Load ANUI library
local ANUI = loadstring(game:HttpGet(
    "https://raw.githubusercontent.com/ANHub-Script/ANUI/refs/heads/main/dist/main.lua"
))()
```

### Step 2: Buat Window

```lua
-- Buat window dengan konfigurasi dasar
local Window = ANUI:CreateWindow({
    Title = "My First Script",
    Author = "by YourName",
    Folder = "myscript",
    NewElements = true,
    HideSearchBar = false
})
```

### Step 3: Tambahkan Version Tag (Optional)

```lua
-- Tambahkan tag untuk menampilkan versi
Window:Tag({
    Title = "v1.0.0",
    Icon = "github",
    Color = Color3.fromHex("#1c1c1c")
})
```

**Hasil:** Window dasar Anda sudah siap!

---

## Menambahkan Tab dan Section

### Membuat Tab

Tab membantu mengorganisir konten Anda:

```lua
-- Buat tab untuk fitur utama
local MainTab = Window:Tab({
    Title = "Main Features",
    Icon = "home"
})

-- Buat tab untuk pengaturan
local SettingsTab = Window:Tab({
    Title = "Settings",
    Icon = "settings"
})
```

### Membuat Section

Section mengelompokkan elemen terkait:

```lua
-- Buat section dalam tab
local CombatSection = MainTab:Section({
    Title = "Combat Features",
    Opened = true  -- Terbuka secara default
})

-- Section untuk visual
local VisualSection = MainTab:Section({
    Title = "Visual Features",
    Opened = false  -- Tertutup secara default
})
```

---

## Komponen Dasar

### 1. Toggle (Switch)

Toggle untuk fitur on/off:

```lua
-- Toggle sederhana
local AutoFarmToggle = CombatSection:Toggle({
    Title = "Auto Farm",
    Desc = "Automatically farm resources",
    Value = false,  -- Default OFF
    Callback = function(enabled)
        if enabled then
            print("Auto Farm ENABLED")
            -- Aktifkan auto farm
        else
            print("Auto Farm DISABLED")
            -- Matikan auto farm
        end
    end
})

-- Toggle dengan icon
CombatSection:Toggle({
    Title = "God Mode",
    Icon = "shield",
    IconSize = 15,
    Value = false,
    Callback = function(enabled)
        game.Players.LocalPlayer.Character.Humanoid.MaxHealth = enabled and math.huge or 100
    end
})
```

### 2. Button (Tombol)

Button untuk aksi sekali klik:

```lua
-- Button sederhana
CombatSection:Button({
    Title = "Teleport to Spawn",
    Icon = "navigation",
    Callback = function()
        game.Players.LocalPlayer.Character:MoveTo(Vector3.new(0, 10, 0))
    end
})

-- Button dengan warna
CombatSection:Button({
    Title = "Remove Fog",
    Desc = "Clear all fog effects",
    Color = Color3.fromHex("#305dff"),
    Icon = "eye",
    Callback = function()
        game.Lighting.FogEnd = 100000
    end
})
```

### 3. Slider (Pengatur Nilai)

Slider untuk nilai numerik:

```lua
-- Slider untuk WalkSpeed
local WalkSpeedSlider = SettingsTab:Slider({
    Title = "Walk Speed",
    Desc = "Adjust your walking speed",
    Value = {
        Min = 16,
        Max = 100,
        Default = 16
    },
    Callback = function(value)
        game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = value
    end
})

-- Slider dengan decimal
SettingsTab:Slider({
    Title = "FOV",
    Step = 0.5,
    Value = {
        Min = 70,
        Max = 120,
        Default = 90
    },
    Callback = function(value)
        workspace.CurrentCamera.FieldOfView = value
    end
})
```

### 4. Dropdown (Menu Pilihan)

Dropdown untuk pilihan multiple:

```lua
-- Dropdown sederhana
SettingsTab:Dropdown({
    Title = "Select Weapon",
    Values = {"Sword", "Bow", "Staff", "Axe"},
    Value = "Sword",
    SearchBarEnabled = true,
    Callback = function(selected)
        print("Selected weapon:", selected)
    end
})

-- Dropdown dengan icons
SettingsTab:Dropdown({
    Title = "Select Theme",
    Values = {
        {Title = "Dark", Icon = "moon"},
        {Title = "Light", Icon = "sun"},
        {Title = "Auto", Icon = "monitor"}
    },
    Value = {Title = "Dark", Icon = "moon"},
    Callback = function(option)
        print("Selected theme:", option.Title)
    end
})
```

### 5. Input (Teks)

Input field untuk teks:

```lua
-- Input sederhana
SettingsTab:Input({
    Title = "Player Name",
    Placeholder = "Enter player name",
    Callback = function(text)
        print("You entered:", text)
    end
})

-- Textarea untuk teks panjang
SettingsTab:Input({
    Title = "Custom Script",
    Type = "Textarea",
    Placeholder = "Enter Lua code here",
    Callback = function(code)
        loadstring(code)()
    end
})
```

### 6. ColorPicker (Pemilih Warna)

ColorPicker untuk memilih warna:

```lua
VisualSection:ColorPicker({
    Title = "ESP Color",
    Value = Color3.fromRGB(255, 0, 0),
    Callback = function(color)
        -- Update ESP color
        print("New color:", color)
    end
})
```

---

## Tips dan Trik

### 1. Menggunakan Group untuk Layout Horizontal

```lua
-- Buat group untuk tombol bersebelahan
local ButtonGroup = MainTab:Group({})

ButtonGroup:Button({
    Title = "Button 1",
    Callback = function() print("1") end
})

ButtonGroup:Button({
    Title = "Button 2",
    Callback = function() print("2") end
})

ButtonGroup:Button({
    Title = "Button 3",
    Callback = function() print("3") end
})
```

### 2. Update Komponen Secara Programmatic

```lua
-- Simpan referensi ke komponen
local StatusToggle = MainTab:Toggle({
    Title = "Status",
    Value = false,
    Callback = function(v) end
})

-- Update dari kode
StatusToggle:Set(true, false, false)  -- Set ON, no callback, no animation
StatusToggle:SetTitle("Status (Active)")
StatusToggle:SetDesc("Currently running")
```

### 3. Notification System

```lua
-- Notifikasi sederhana
ANUI:Notify({
    Title = "Success!",
    Content = "Feature enabled successfully"
})

-- Notifikasi dengan durasi custom
ANUI:Notify({
    Title = "Warning",
    Content = "This action cannot be undone",
    Duration = 5  -- 5 detik
})
```

### 4. Dialog untuk Konfirmasi

```lua
MainTab:Button({
    Title = "Delete All",
    Callback = function()
        Window:Dialog({
            Title = "Confirm Delete",
            Content = "Are you sure you want to delete all items? This cannot be undone.",
            Buttons = {
                {
                    Title = "Delete",
                    Variant = "Primary",
                    Callback = function()
                        print("Deleting...")
                        -- Delete logic here
                    end
                },
                {
                    Title = "Cancel",
                    Variant = "Secondary",
                    Callback = function()
                        print("Cancelled")
                    end
                }
            }
        })
    end
})
```

### 5. Menggunakan Paragraph untuk Info

```lua
MainTab:Paragraph({
    Title = "Welcome to My Script",
    Desc = "This is a comprehensive script with many features. Make sure to configure settings before use."
})
```

### 6. Code Block untuk Sharing

```lua
MainTab:Code({
    Title = "Script Code",
    Code = [[
local player = game.Players.LocalPlayer
print("Hello, " .. player.Name)
    ]]
})
```

---

## Troubleshooting

### Problem: Window tidak muncul

**Solusi:**
```lua
-- Pastikan executor support loadstring
if not loadstring then
    print("Your executor doesn't support loadstring!")
    return
end

-- Pastikan HttpGet berhasil
local success, library = pcall(function()
    return loadstring(game:HttpGet(
        "https://raw.githubusercontent.com/ANHub-Script/ANUI/refs/heads/main/dist/main.lua"
    ))()
end)

if not success then
    print("Failed to load library:", library)
    return
end
```

### Problem: Callback tidak dipanggil

**Solusi:**
```lua
-- Pastikan function syntax benar
Toggle({
    Callback = function(value)  -- ✅ Benar
        print(value)
    end
})

-- Bukan:
Toggle({
    Callback = print(value)  -- ❌ Salah
})
```

### Problem: Icon tidak muncul

**Solusi:**
```lua
-- Gunakan nama icon dari Lucide Icons
-- List: https://lucide.dev/icons/

Button({
    Icon = "home"  -- ✅ Benar
})

Button({
    Icon = "Home"  -- ❌ Mungkin tidak work (case sensitive)
})
```

### Problem: Warna tidak berubah

**Solusi:**
```lua
-- Gunakan Color3 methods
Color = Color3.fromRGB(255, 0, 0)  -- ✅ Benar
Color = Color3.fromHex("#FF0000")  -- ✅ Benar

-- Bukan:
Color = {255, 0, 0}  -- ❌ Salah
```

---

## Contoh Script Lengkap

```lua
-- ===== LOAD LIBRARY =====
local ANUI = loadstring(game:HttpGet(
    "https://raw.githubusercontent.com/ANHub-Script/ANUI/refs/heads/main/dist/main.lua"
))()

-- ===== CREATE WINDOW =====
local Window = ANUI:CreateWindow({
    Title = "My Awesome Script",
    Author = "by YourName",
    Folder = "myscript",
    NewElements = true
})

Window:Tag({
    Title = "v1.0.0",
    Icon = "github"
})

-- ===== TABS =====
local MainTab = Window:Tab({
    Title = "Main",
    Icon = "home"
})

local SettingsTab = Window:Tab({
    Title = "Settings",
    Icon = "settings"
})

-- ===== SECTIONS =====
local PlayerSection = MainTab:Section({
    Title = "Player",
    Opened = true
})

-- ===== COMPONENTS =====
PlayerSection:Toggle({
    Title = "Speed Boost",
    Icon = "zap",
    Value = false,
    Callback = function(enabled)
        local speed = enabled and 50 or 16
        game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = speed
    end
})

PlayerSection:Button({
    Title = "Reset Character",
    Icon = "refresh-cw",
    Callback = function()
        game.Players.LocalPlayer.Character.Humanoid.Health = 0
    end
})

SettingsTab:Slider({
    Title = "FOV",
    Value = {Min = 70, Max = 120, Default = 90},
    Callback = function(value)
        workspace.CurrentCamera.FieldOfView = value
    end
})

-- ===== NOTIFICATION =====
ANUI:Notify({
    Title = "Script Loaded",
    Content = "Welcome to My Awesome Script!"
})
```

---

## 🎓 Next Steps

Setelah menguasai dasar-dasar:

1. **Explore Components** - Coba semua 15+ komponen yang tersedia
2. **Check API Reference** - Lihat `quick-reference.html` untuk detail lengkap
3. **View Examples** - Load `main_example.lua` untuk inspirasi
4. **Join Community** - Join Discord untuk bantuan: https://discord.gg/cy6uMRmeZ
5. **Read Source** - Pelajari source code di GitHub untuk advanced usage

---

## 📚 Resources

- **GitHub**: https://github.com/ANHub-Script/ANUI
- **Documentation**: https://ANHub-Script.github.io/ANUI-Docs/
- **Discord**: https://discord.gg/cy6uMRmeZ
- **Lucide Icons**: https://lucide.dev/icons/

---

**Happy Coding! 🚀**

*Made with ❤️ by the ANUI Community*
