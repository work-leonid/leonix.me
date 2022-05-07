class Shared::Image < Bridgetown::Component
  def initialize(name:, project:, cover: nil)
    @name = name
    @project = project
    @cover = cover
  end
end
